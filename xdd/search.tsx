import React, { useState, useContext, useEffect } from "react";
import { InputGroup, Button, Card, Icon, Spinner } from "@blueprintjs/core";
import axios from "axios";
import { NoResults, DefaultCallout } from "./snippets";
import { AppContext } from ".";

function extractDoi(identifier) {
  let doi: string;
  identifier.map((obj) => {
    if (obj["type"] == "doi") {
      doi = obj["id"];
    }
  });
  return doi;
}

function Authors(props) {
  const { authorList } = props;
  return (
    <div className="author-container">
      {authorList.map((author, i) => {
        return (
          <div key={i} className="author">
            {author["name"]}
          </div>
        );
      })}
    </div>
  );
}

function SearchBar(props) {
  const {
    inputValue,
    initiateSearch,
    handleInputValueChange,
    placeholder = "Enter a search term",
    leftIcon = "search",
    rightElement = <RightElement onClick={initiateSearch} />,
    style = { flex: "0" },
  } = props;
  return (
    <InputGroup
      style={{ ...style }}
      placeholder={placeholder}
      leftIcon={leftIcon}
      value={inputValue}
      rightElement={rightElement}
      onChange={handleInputValueChange}
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          initiateSearch();
        }
      }}
    />
  );
}

function PubCard({ pub }) {
  const { title, journal, author, identifier, ...rest } = pub;
  const { state, runAction } = useContext(AppContext);
  const doi = extractDoi(identifier);

  const onClick = () => {
    let docid = rest._gddid;
    runAction({ type: "set_docid", payload: { docid } });
  };

  return (
    <Card
      className="pubcard"
      onClick={onClick}
      interactive={true}
      elevation={1}
    >
      <Icon icon="book" style={{ marginTop: "5px", marginRight: "5px" }} />
      <div className="pub-info">
        <div className="pub-title">{title}</div>
        <div className="doi">{doi}</div>
        <div className="journal">{journal}</div>
      </div>
    </Card>
  );
}

function RightElement({ onClick }) {
  return (
    <Button
      minimal={true}
      icon="arrow-right"
      onClick={onClick}
      style={{ borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}
    />
  );
}

function isLetter(char) {
  if (char.toUpperCase() != char.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

export const isTitle = (search) => {
  let i = 0;
  for (let char of search) {
    if (isLetter(char)) {
      i += 1;
    }
  }
  if (i / search.length > 0.7) {
    return true;
  } else {
    return false;
  }
};

async function get(searchString) {
  let route = `https://xdd.wisc.edu/api/articles`;
  let params = isTitle(searchString)
    ? { title_like: searchString, max: 20 }
    : { doi: searchString, max: 20 };
  const res = await axios.get(route, {
    params: { ...params },
  });
  return res["data"];
}

function ListRenderer({ data }) {
  let title = "Search publications";
  let des =
    "Search the xDD database for a publication to get started. Search by terms, phrases, or DOI's.";
  if (data == null) return <DefaultCallout title={title} description={des} />;
  if (data.length == 0) return <NoResults />;
  return (
    <ul className="list">
      {data.length > 0
        ? data.map((pub, i) => {
            return (
              <li key={i}>
                <PubCard key={i} pub={pub} />
              </li>
            );
          })
        : null}
    </ul>
  );
}

function LandingSearch() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleInputValueChange(e) {
    setInputValue(e.target.value);
  }

  async function initiateSearch() {
    if (inputValue.length > 0) {
      setLoading(true);
      const data = await get(inputValue);
      if (data["success"]) {
        setData(data["success"]["data"]);
        setLoading(false);
      }
    } else {
      setData(null);
    }
  }

  useEffect(() => {
    if (inputValue == "") {
      setData(null);
    }
  }, [inputValue]);

  return (
    <div className="landing-search">
      <h1 className="xdd-title">xDD</h1>
      <h4 className="xdd-subtitle">
        A Digitial assistant to extract knowledge from the published literature
      </h4>
      <SearchBar
        placeholder="Search by term, phrase, or DOI"
        initiateSearch={initiateSearch}
        inputValue={inputValue}
        handleInputValueChange={handleInputValueChange}
      />
      <div className="list-container tall">
        {loading ? <Spinner /> : <ListRenderer data={data} />}
      </div>
    </div>
  );
}

export { LandingSearch, SearchBar, ListRenderer, PubCard, extractDoi };

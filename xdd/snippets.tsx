import React, { useState, useContext, useEffect } from "react";
import { AppContext, appCTX, stateCTX } from ".";
import axios from "axios";
import { SearchBar } from "./search";
import { Card, Callout, Spinner, Button } from "@blueprintjs/core";

const route = "https://xdd.wisc.edu/api/snippets";

export function NoResults() {
  return (
    <Callout
      data-testid="no-results-callout"
      intent="danger"
      style={{ width: "95%" }}
      title="No Results"
    >{`Looks like there are no 
  snippets associated with term searched. Try another term by either clicking on a known term or typing one
  in yourself.`}</Callout>
  );
}

export function DefaultCallout({ title, description }) {
  return (
    <Callout
      data-testid="default-callout"
      intent="primary"
      title={title}
      style={{
        width: "95%",
      }}
    >
      {description}
    </Callout>
  );
}

function NewTermCallout({ term, onClick }) {
  return (
    <Callout intent="success" title="New term?" style={{ width: "95%" }}>
      It looks like you've entered a new term not in the known term set! Would
      you like to add <b>{term}</b> to the set?{" "}
      <Button intent="success" onClick={onClick}>
        Add {term}
      </Button>
    </Callout>
  );
}

const Highlight = ({ highlight }) => {
  return (
    <Card className="snippet-card" elevation={1}>
      <li dangerouslySetInnerHTML={{ __html: highlight }} />;
    </Card>
  );
};

const ListRenderer = ({ highlights, term }) => {
  const { state, runAction } = useContext<appCTX>(AppContext);
  const { known_terms }: Partial<stateCTX> = state;
  let description = `Search for paper snippets by either clicking on a 
     known term in the left panel or by keyword searching.`;
  if (highlights == null)
    return (
      <DefaultCallout title="No paper snippets" description={description} />
    );

  const isNewTerm = !isKnownTerm(term, known_terms);

  if (highlights.length == 0) return <NoResults />;

  const onClick = () => {
    runAction({ type: "add_new_term", payload: { snippet_term: term } });
  };

  return (
    <ul className="list">
      {isNewTerm ? <NewTermCallout term={term} onClick={onClick} /> : null}
      {highlights.map((highlight, index) => {
        return <Highlight highlight={highlight} key={index} />;
      })}
    </ul>
  );
};

async function getSnippets(props) {
  const res = await axios.get(route, {
    params: {
      docid: props.docid,
      term: props.snippets_term,
      fragment_limit: 20,
    },
  });
  let highlight = [];
  //@ts-ignore
  if (res.data.success) {
    //@ts-ignore
    res.data.success.data.map((dat) => {
      highlight = [...highlight, ...dat.highlight];
    });
  }
  return highlight;
}

const isKnownTerm = (term, knownTerms) => {
  let terms_ = Object.values(knownTerms);
  let terms = [];
  terms_.map((termss) => {
    //@ts-ignore
    terms = [...terms, ...termss];
  });
  terms = terms.map((term) => term.toLowerCase());
  term = term.toLowerCase();

  return terms.includes(term);
};

function PageSnippets() {
  const { state, runAction } = useContext<appCTX>(AppContext);
  const { docid, snippet_term }: Partial<stateCTX> = state;

  const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState(snippet_term);
  const [snippets, setSnippets] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  const onClick = async (snippets_term = term) => {
    if (snippets_term == "") {
      setSnippets(null);
    } else {
      runAction({
        type: "add_recent_term",
        payload: { snippet_term: snippets_term },
      });
      setSearchTerm(snippets_term);
      setLoading(true);
      let data = await getSnippets({ docid, snippets_term });
      setSnippets(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (snippet_term.length > 0) {
      setTerm(snippet_term);
      onClick(snippet_term);
    }
  }, [snippet_term]);

  useEffect(() => {
    if (term == "") {
      setSnippets(null);
    }
  }, [term]);

  useEffect(() => {
    setTerm("");
    setSnippets(null);
  }, [docid]);

  const onChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="snippets-container">
      <h2 style={{ marginBottom: "5px" }}>Paper Snippets</h2>
      <SearchBar
        style={{ flex: "0", width: "100%" }}
        initiateSearch={onClick}
        inputValue={term}
        placeholder="Search paper snippets by term"
        handleInputValueChange={onChange}
      />
      <div className="list-container">
        {loading ? (
          <Spinner />
        ) : (
          <ListRenderer highlights={snippets} term={searchTerm} />
        )}
      </div>
    </div>
  );
}

export { PageSnippets };

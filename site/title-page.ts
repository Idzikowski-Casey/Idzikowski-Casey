import { hyperStyled } from "@macrostrat/hyper";
import { Link } from "react-scroll";
import { FaChevronDown } from "react-icons/fa";
import styles from "./site.module.scss";

const h = hyperStyled(styles);

function DownButton() {
  return h("div.chev-down-con", [
    h(Link, { to: "about", smooth: true }, [
      h("a.chev-down", [h(FaChevronDown)]),
    ]),
  ]);
}

function TitlePage() {
  return h("div.gradient", { id: "title" }, [
    h("div", [
      h("h1.title", ["casey idzikowski", h("h3.tag-animate", ["</>"])]),
      h("h2.subtitle", ["Software Developer"]),
    ]),
    h(DownButton),
  ]);
}

export { TitlePage };

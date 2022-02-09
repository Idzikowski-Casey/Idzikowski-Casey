import { hyperStyled } from "@macrostrat/hyper";
import styles from "./site.module.scss";
import { Link } from "react-scroll";

const h = hyperStyled(styles);

interface NavI {
  title: string;
  to: string;
}

function NavLink(props: NavI) {
  return h("div.nav-item", [
    h(
      Link,
      {
        activeClass: props.title == "home" ? undefined : styles.activeLink,
        to: props.to,
        smooth: true,
        spy: true,
      },
      [props.title]
    ),
  ]);
}

const pages: NavI[] = [
  { title: "home", to: "title" },
  { title: "about", to: "about" },
  { title: "resume", to: "resume" },
  { title: "projects", to: "projects" },
];

function NavBar() {
  return h("div.navbar", [
    pages.map((page, i) => {
      return h(NavLink, { key: i, ...page });
    }),
  ]);
}

export { NavBar };

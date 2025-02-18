import { hyperStyled } from "@macrostrat/hyper";
import { FaGithub, FaLinkedinIn, FaChevronUp } from "react-icons/fa";
import { Link } from "react-scroll";
import { IconType } from "react-icons/lib";
import styles from "./site.module.scss";

const h = hyperStyled(styles);

function UpButton() {
  return h("div.chev-up-con", [
    h(Link, { to: "title", smooth: true }, [
      h("a.chev-down", [h(FaChevronUp)]),
    ]),
  ]);
}

const github = "https://github.com/Idzikowski-Casey";
const linkden = "https://www.linkedin.com/in/casey-idzikowski-742858108/";

const links: IconLinkI[] = [
  { link: github, icon: FaGithub },
  { link: linkden, icon: FaLinkedinIn },
];

const CopyWright = () =>
  h("p.copwright", ["© Copyright 2022 Casey Idzikowski"]);

interface IconLinkI {
  link: string;
  icon: IconType;
}

function IconLink(props: IconLinkI) {
  return h("a.social-link", { href: props.link, target: "_blank" }, [
    h(props.icon),
  ]);
}

function Footer() {
  return h("div.footer-page", [
    h(UpButton),
    h("div.icon-holder", [
      links.map((link, i) => {
        return h(IconLink, { ...link });
      }),
    ]),
    h(CopyWright),
  ]);
}

export { Footer };

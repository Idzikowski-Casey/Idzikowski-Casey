import { hyperStyled } from "@macrostrat/hyper";
import { ImCog } from "react-icons/im";
import { IoPodiumOutline } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import styles from "./wurdle.module.scss";
import Link from "next/link";

const h = hyperStyled(styles);

interface IconBtnProps {
  icon: any;
  onClick: () => void;
}

function IconBtn(props: IconBtnProps) {
  return h("button.icon", { onClick: props.onClick }, [props.icon]);
}

interface IconLink {
  icon: any;
  link: string;
}

function IconLink(props: IconLink) {
  return h(Link, { href: props.link }, [h("button.icon", [props.icon])]);
}

function HomeButton() {
  return h(IconLink, {
    icon: h(AiFillHome),
    link: process.env.NEXT_PUBLIC_BASE_URL,
  });
}

export function Header() {
  return h("div.header", [
    h(HomeButton),
    h("h1", ["Wurdle(clone)"]),
    h("div", [
      h(IconBtn, { icon: h(IoPodiumOutline), onClick: () => {} }),
      h(IconBtn, { icon: h(ImCog), onClick: () => {} }),
    ]),
  ]);
}

export { HomeButton };

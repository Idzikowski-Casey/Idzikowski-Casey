import { hyperStyled } from "@macrostrat/hyper";
import { ImCog } from "react-icons/im";
import { IoPodiumOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import styles from "./wurdle.module.scss";

const h = hyperStyled(styles);

interface IconBtnProps {
  icon: any;
  onClick: () => void;
}

function IconBtn(props: IconBtnProps) {
  return h("button.icon", { onClick: props.onClick }, [props.icon]);
}

export function Header() {
  return h("div.header", [
    h(IconBtn, { icon: h(AiOutlineQuestionCircle), onClick: () => {} }),
    h("h1", ["Nook's Wurds"]),
    h("div", [
      h(IconBtn, { icon: h(IoPodiumOutline), onClick: () => {} }),
      h(IconBtn, { icon: h(ImCog), onClick: () => {} }),
    ]),
  ]);
}

import { hyperStyled } from "@macrostrat/hyper";
import styles from "../styles/Home.module.scss";
import Wurdle from "../wurdle";

const h = hyperStyled(styles);

export default function Wurdle_() {
  return h(Wurdle);
}

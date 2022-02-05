import { hyperStyled } from "@macrostrat/hyper";
import { LetterBoxI } from "./reducer";
import styles from "./wurdle.module.scss";

const h = hyperStyled(styles);

function LetterBox({ letter }: { letter: LetterBoxI }) {
  const l = letter.letter? letter.letter.toUpperCase() : letter.letter

  return h("div.letter-box", { style: { backgroundColor: letter.color } }, [
    l,
  ]);
}

export { LetterBox };

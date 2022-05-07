import { hyperStyled } from "@macrostrat/hyper";
import { BoxColor, LetterBoxI, GAME_STATUS } from "./reducer";
import styles from "./wurdle.module.scss";

const h = hyperStyled(styles);

function LetterBox({
  letter,
  order,
  status,
}: {
  letter: LetterBoxI;
  order: number;
  status: GAME_STATUS;
}) {
  const l = letter.letter ? letter.letter.toUpperCase() : letter.letter;
  const letterClassName = letter.letter ? ".has-letter" : undefined;
  let colorClass: string = `.${letter.color}`;

  return h(
    `div.letter-box ${letterClassName} ${colorClass}`,
    {
      style: {
        animationDelay:
          letter.color != BoxColor.WHITE ? `${order * 0.4}s` : "0s",
      },
    },
    [l]
  );
}

export { LetterBox };

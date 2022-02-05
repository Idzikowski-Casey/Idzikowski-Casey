import { LetterBoxI, BoxColor, GAME_STATUS } from "./reducer";

function isAlpha(ch: string): Boolean {
  return /^[A-Z]$/i.test(ch);
}

function CheckRow(
  word: string,
  array: LetterBoxI[]
): { letters: LetterBoxI[]; status: GAME_STATUS } {
  const word_ = word.split("");
  let correct = 0;
  const letters: LetterBoxI[] = array.map((lbox, i) => {
    if (word_.includes(lbox.letter)) {
      if (word_[i] == lbox.letter) {
        lbox.color = BoxColor.GREEN;
        correct++;
      } else {
        lbox.color = BoxColor.YELLOW;
      }
    } else {
      lbox.color = BoxColor.GRAY;
    }
    return lbox;
  });

  if (correct == 5) {
    return { letters, status: GAME_STATUS.WIN };
  }

  return { letters, status: GAME_STATUS.ACTIVE };
}

export { isAlpha, CheckRow };

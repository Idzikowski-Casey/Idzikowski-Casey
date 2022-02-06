import {
  LetterBoxI,
  BoxColor,
  GAME_STATUS,
  WurdleActions,
  WurdleState,
  UsedLetter,
} from "./reducer";

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

function AddUsed(row: LetterBoxI[], used: UsedLetter) {
  row.forEach((l) => {
    used[l.letter] = l.color;
  });
  return used;
}

const keys: string[][] = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["enter", "z", "x", "c", "v", "b", "n", "m", "delete"],
];

const onKeyAction = (
  char: string,
  dispatch: (action: WurdleActions) => void,
  state: WurdleState
) => {
  if (
    isAlpha(char) &&
    state.grid[state.current[0]][state.current[1]].letter == null &&
    state.status == GAME_STATUS.ACTIVE
  ) {
    dispatch({ type: "add-letter", letter: char });
  } else if (char.toLocaleLowerCase() === "backspace") {
    console.log("delete letter");
    dispatch({ type: "remove-letter" });
  } else if (
    char === "enter" &&
    state.grid[state.current[0]][state.current[1]].letter != null
  ) {
    if (state.current[0] == 5) {
      console.log("game over");
      dispatch({ type: "update-status", status: GAME_STATUS.LOSE });
    } else {
      console.log("enter has been pressed");
      dispatch({ type: "check-current" });
    }
  }
};

export { isAlpha, CheckRow, keys, onKeyAction, AddUsed };

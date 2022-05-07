import { useEffect, KeyboardEvent, useReducer } from "react";
import { hyperStyled } from "@macrostrat/hyper";
import { Header } from "./header";
import { KeyBoard } from "./keyboard";
import styles from "./wurdle.module.scss";
import { LetterBox } from "../wurdle";
import { WurdlerReducer, WurdleDefaultState, GAME_STATUS } from "./reducer";
import { onKeyAction } from "./helpers";
import { WinDialog, LooseDialog } from "./dialogs";

const h = hyperStyled(styles);

const randomWordAPI = "https://random-word-api.herokuapp.com/word?length=5";

export default function Wurdle() {
  //@ts-ignore
  const [state, dispatch] = useReducer(WurdlerReducer, WurdleDefaultState);

  const onKeyUp = (e: KeyboardEvent) => {
    const char = e.key.toLocaleLowerCase();
    //@ts-ignore
    onKeyAction(char, dispatch, state);
  };

  useEffect(() => {
    //@ts-ignore
    window.addEventListener("keyup", onKeyUp);
    return () => {
      //@ts-ignore
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [state.current]);

  useEffect(() => {
    const getWord = async () => {
      const res = await fetch(randomWordAPI);
      const word = await res.json();
      dispatch({ type: "set-word", word: word[0] });
    };
    getWord();
  }, []);

  return h("div.app-container", [
    h(Header),
    h(WinDialog, { isOpen: state.status == GAME_STATUS.WIN }),
    h(LooseDialog, {
      isOpen: state.status == GAME_STATUS.LOSE,
      word: state.word,
    }),
    h(`div.letters`, { onKeyUp: onKeyUp }, [
      state.grid.map((row, j) => {
        return h("div.row", { key: j }, [
          row.map((l, i) => {
            return h(LetterBox, {
              key: i,
              letter: l,
              order: i,
              status: state.status,
            });
          }),
        ]);
      }),
    ]),
    h(KeyBoard, { state, dispatch }),
  ]);
}

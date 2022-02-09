import { useEffect, KeyboardEvent, useReducer } from "react";
import { hyperStyled } from "@macrostrat/hyper";
import { Header } from "./header";
import { KeyBoard } from "./keyboard";
import styles from "./wurdle.module.scss";
import { LetterBox } from "../wurdle";
import { WurdlerReducer, WurdleDefaultState, GAME_STATUS } from "./reducer";
import { onKeyAction } from "./helpers";

const h = hyperStyled(styles);

export default function Wurdle() {
  //@ts-ignore
  const [state, dispatch] = useReducer(WurdlerReducer, WurdleDefaultState);

  const onKeyUp = (e: KeyboardEvent) => {
    const char = e.key.toLocaleLowerCase();
    console.log(state);
    onKeyAction(char, dispatch, state);
  };

  useEffect(() => {
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [state.current]);

  return h("div.app-container", [
    h(Header),
    h("div.letters", { onKeyUp: onKeyUp }, [
      state.grid.map((row, j) => {
        return h("div.row", [
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

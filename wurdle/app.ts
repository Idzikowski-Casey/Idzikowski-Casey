import { useState, useEffect, KeyboardEvent, useReducer } from "react";
import { hyperStyled } from "@macrostrat/hyper";
import styles from "./wurdle.module.scss";
import { isAlpha, LetterBox } from "../wurdle";
import {
  WurdleState,
  WurdlerReducer,
  WurdleDefaultState,
  WurdleActions,
  GAME_STATUS,
} from "./reducer";

const h = hyperStyled(styles);

export default function Wurdle() {
  //@ts-ignore
  const [state, dispatch] = useReducer(WurdlerReducer, WurdleDefaultState);

  const onKeyUp = (e: KeyboardEvent) => {
    const char = e.key.toLocaleLowerCase();
    console.log(state);
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

  useEffect(() => {
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [state.current]);

  return h("div.app-container", [
    h("div.letters", { onKeyUp: onKeyUp }, [
      state.grid.map((row, j) => {
        return row.map((l, i) => {
          return h(LetterBox, {
            key: i,
            letter: l,
          });
        });
      }),
    ]),
    h("div.status", [
      h.if(state.status == GAME_STATUS.LOSE)("h2.lose", ["YOU LOST! Bummer"]),
      h.if(state.status == GAME_STATUS.WIN)("h2.win", ["YOU Won! Woohoo"]),
    ]),
  ]);
}

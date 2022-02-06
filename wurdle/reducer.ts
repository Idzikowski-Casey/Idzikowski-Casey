import { CheckRow , AddUsed} from "./helpers";

export enum GAME_STATUS {
  ACTIVE,
  LOSE,
  WIN,
}

export enum BoxColor{
    WHITE = "white",
    GRAY = "gray",
    YELLOW = "yellow",
    GREEN = "green"
}

export interface UsedLetter {
    [letter: string]: BoxColor
}

export interface WurdleState {
  grid: LetterBoxI[][]; // len 25
  current: [i:number, j:number]; // keep track of last empty space
  word: string;
  status: GAME_STATUS;
  used: UsedLetter | {}
}

export interface LetterBoxI{
    letter: string | null;
    color: BoxColor
}

const initialLetterBox: LetterBoxI = {
    letter: null,
    color: BoxColor.WHITE
}

export const WurdleDefaultState: WurdleState = {
  grid: new Array(6).fill(new Array(5).fill(initialLetterBox)),
  current: [0,0],
  word: "which",
  status: GAME_STATUS.ACTIVE,
  used: {}
};

type ADD_LETTER = { type: "add-letter"; letter: string };
type REMOVE_LETTER = { type: "remove-letter" };
type CHECK_CURRENT = { type: "check-current" };
type UPDATE_STATUS = { type: "update-status"; status: GAME_STATUS };

export type WurdleActions =
  | ADD_LETTER
  | REMOVE_LETTER
  | CHECK_CURRENT
  | UPDATE_STATUS;

export const WurdlerReducer = (state: WurdleState, action: WurdleActions) => {
  switch (action.type) {
    case "add-letter":
      // add letter to end of grid.
     const g = JSON.parse(JSON.stringify(state.grid));
     g[state.current[0]][state.current[1]] = {letter: action.letter, color: BoxColor.WHITE}
     console.log("G",state)
     let nextVal = state.current[1] + 1;
     if(state.current[1] == 4){
        nextVal = 4
     }
     return {
        ...state,
        grid : g,
        current: [state.current[0], nextVal]
      };
    case "remove-letter":
      const g_ = JSON.parse(JSON.stringify(state.grid));
      const val = g_[state.current[0]][4]
      // if we are at the end element and it's filled, current will stay same
      let nextVal_ = val.letter != null ? state.current[1]:state.current[1] - 1;
      if(nextVal_ < 0){
          nextVal_ = 0
      }
      g_[state.current[0]][nextVal_] = {letter: null, color: BoxColor.WHITE}
      return {
        ...state,
        grid : g_,
        current: [state.current[0], nextVal_]
      };
    case "update-status":
      return {
        ...state,
        status: action.status,
      };
    case "check-current":
      ///check current against word
      const grid_ = JSON.parse(JSON.stringify(state.grid));
      const {letters: row, status} = CheckRow(state.word, grid_[state.current[0]])
      const used = AddUsed(row, state.used)
      grid_[state.current[0]] = row
      return {
        ...state,
        current: [state.current[0]+1, 0],
        grid: grid_,
        status,
        used
      };
    default:
      console.error("I don't know what you want FROM ME!");
  }
};

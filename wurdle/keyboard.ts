import { hyperStyled } from "@macrostrat/hyper";
import styles from "./wurdle.module.scss";
import { IoBackspaceOutline } from "react-icons/io5";
import { WurdleState, WurdleActions, UsedLetter } from "./reducer";
import { keys, onKeyAction } from "./helpers";
import { IconType } from "react-icons/lib";

const h = hyperStyled(styles);

interface keyBoardProps {
  state: WurdleState;
  dispatch: (action: WurdleActions) => void;
}

interface keyProps {
  label: string | IconType;
  onClick: (e: any) => void;
  used: UsedLetter;
}

function Key(props: keyProps) {
  const { label, onClick, used } = props;

  return h(
    //@ts-ignore
    `div.key .${used[label]}`,
    { onClick, style: { animationDelay: `${5 * 0.5}s` } },
    [props.label]
  );
}

function KeyBoard({ state, dispatch }: keyBoardProps) {
  return h("div.keyboard", [
    keys.map((row, i) => {
      return h("div.key-row", { key: i }, [
        row.map((key, j) => {
          let label = key;
          if (key == "delete") {
            //@ts-ignore
            label = h(IoBackspaceOutline);
          }
          const onClick = () => {
            let k = key;
            if (key == "delete") {
              k = "backspace";
            }
            onKeyAction(k, dispatch, state);
          };
          return h(Key, { key: j, label: label, onClick, used: state.used });
        }),
      ]);
    }),
  ]);
}

export { KeyBoard };

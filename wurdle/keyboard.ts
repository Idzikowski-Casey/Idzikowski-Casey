import { hyperStyled } from "@macrostrat/hyper";
import styles from "./wurdle.module.scss";
import { WurdleState, WurdleActions, UsedLetter } from "./reducer";
import { keys, onKeyAction } from "./helpers";

const h = hyperStyled(styles);

interface keyBoardProps {
  state: WurdleState;
  dispatch: (action: WurdleActions) => void;
}

interface keyProps {
  label: string;
  onClick: (e: any) => void;
  used: UsedLetter;
}

function Key(props: keyProps) {
  const { label, onClick, used } = props;

  console.log(label, used, used[label]);
  return h(
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
          const onClick = () => {
            let k = key;
            if (key == "delete") k = "backspace";
            onKeyAction(k, dispatch, state);
          };
          return h(Key, { key: j, label: key, onClick, used: state.used });
        }),
      ]);
    }),
  ]);
}

export { KeyBoard };

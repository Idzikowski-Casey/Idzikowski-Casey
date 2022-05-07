import { ReactChild, useEffect, useState } from "react";
import Link from "next/link";
import { hyperStyled } from "@macrostrat/hyper";
import { Button, Dialog, IDialogProps } from "@blueprintjs/core";
import styles from "./wurdle.module.scss";

const h = hyperStyled(styles);

interface DialogPropsI {
  isOpen: boolean;
  children: ReactChild;
}

const DialogProps: Partial<IDialogProps> = {
  hasBackdrop: false,
  canOutsideClickClose: true,
  canEscapeKeyClose: true,
};

function PlayAgainButton() {
  return h(Link, { href: "/wurdle", as: "/wurdle" }, [
    h(Button, { onClick: () => window.location.reload() }, [
      h("h2", ["Play again?"]),
    ]),
  ]);
}

function BaseDialog(props: DialogPropsI) {
  const { isOpen } = props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setOpen(isOpen);
      }, 3000);
    }
  }, [isOpen]);

  return h(Dialog, { isOpen: open, ...DialogProps }, [props.children]);
}

function WinDialog({ isOpen }: { isOpen: boolean }) {
  return h(BaseDialog, { isOpen: isOpen }, [
    h("div.dialog-container", [
      h("h2", { style: { color: "#165A36" } }, ["You Won!!"]),
      h(PlayAgainButton),
    ]),
  ]);
}

function LooseDialog({ isOpen, word }: { isOpen: boolean; word: string }) {
  return h(BaseDialog, { isOpen }, [
    h("div.dialog-container", [
      h("h2", { style: { color: "#AC2F33" } }, ["You Lost! Major Bummer"]),
      h("h3", [
        "The word was ",
        h("span", { style: { color: "#215DB0" } }, [word]),
      ]),
      h(PlayAgainButton),
    ]),
  ]);
}

export { WinDialog, LooseDialog };

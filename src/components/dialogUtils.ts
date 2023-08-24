import AlertDialog, { Props } from "./Dialog";
import { createElement } from "react";
import * as ReactDOM from "react-dom/client";

export function createDialog(props: Omit<Props, "onClose" | "onConfirm">) {
  return new Promise((resolve, reject) => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const root = ReactDOM.createRoot(div);
    const element = createElement(AlertDialog, {
      ...props,
      onClose: () => {
        root.unmount();
        div.remove();
        reject();
      },
      onConfirm: () => {
        root.unmount();
        div.remove();
        resolve(null);
      },
    } as Props);

    root.render(element);
  });
}

import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Modal: React.FC<{children?: React.ReactNode}> = ({children}) => {
  return ReactDOM.createPortal(
    <div id="modal__wrapper">
      <div className={classes.overlay}></div>
      <div className={classes.modal}>{children}</div>
    </div>,
    (document.getElementById("modal") as HTMLElement) ||
      document.createElement("div")
  );
};

export default Modal;
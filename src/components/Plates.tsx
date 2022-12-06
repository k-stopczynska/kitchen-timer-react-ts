import React from "react";
import Plate from "./Plate";
import classes from "./Plates.module.css";

const Plates = () => {
  return (
    <React.Fragment>
    <section className={classes.board__main}>
      <h2 className={classes.board__heading}>tap a plate to set timer</h2>
      <div className={classes.plates__container}>
        <Plate id="top-left"/>
        <Plate id="top-right"/>
        <Plate id="bottom-left"/>
        <Plate id="bottom-right"/>
      </div>
      <div className={classes.over__container}>
        <Plate id="oven"/>
      </div>
    </section>
    </React.Fragment>
  );
};

export default Plates;

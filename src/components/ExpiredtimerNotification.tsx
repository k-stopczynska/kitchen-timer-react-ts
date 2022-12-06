import React from "react";
import Modal from "./Modal";
import classes from "./ExpiredTimerNotification.module.css";
import audio from '../utils/sounds/mixkit-alert-bells-echo-765.wav';

const ExpiredTimerNotification: React.FC<{id: string | null, counter: (arg0: number | null) => void, open: (arg0: boolean) => void }> = (props) => {
  const sound = new Audio(audio);
  sound.play();

  const closeModal = () => {
    props.open(false);
    props.counter(null)
  }

  return (
    <Modal>
      <section className={classes.notification__wrapper}>
        <button onClick={closeModal} aria-label="button__close__modal"></button>
        <h2 className={classes.plate__heading}>{props.id} plate</h2>
        <p className={classes.notification__para}>is ready to serve!</p>
      </section>
    </Modal>
  );
};

export default ExpiredTimerNotification;

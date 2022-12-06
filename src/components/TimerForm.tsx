import Modal from "./Modal";
import classes from "./TimerForm.module.css";

const TimerForm: React.FC<{
  id: string | null;
  time: (userTime: number) => void;
  toggle: () => void;
  open: (arg0: boolean) => void;
}> = (props) => {
  const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userTime = +(
      (event.target as HTMLElement).children[1] as HTMLInputElement
    ).value;
    closeModal();
    props.time(userTime);
    props.toggle();
  };

  const closeModal = () => {
    props.open(false);
  };

  return (
    <Modal>
      <h2>{props.id} plate</h2>
      <form className={classes.form__control} onSubmit={submitFormHandler}>
        <label htmlFor="user__input">set time in minutes</label>
        <input
          className={classes.user__input}
          id="user__input"
          type="number"
          min="1"
          max="14000"
          step="1"
        ></input>
        <button type="submit" className={classes.button__add__timer}>
          Add timer
        </button>
      </form>
    </Modal>
  );
};

export default TimerForm;

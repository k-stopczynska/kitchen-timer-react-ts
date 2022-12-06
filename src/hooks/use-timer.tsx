import { useState, useEffect, useCallback } from "react";

const useTimer = () => {
  const [counter, setCounter] = useState<number | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  const changeTime = useCallback(() => {
    if (counter !== null && counter > 0) {
      setCounter((prevCounter) => prevCounter ? prevCounter - 1 : null);
    } else {
      //setCounter("");
      return;
    }
  }, [counter]);

  const toggle = () => {
    if (counter === null || counter <= 0) {
      setIsClicked(true);
    }
  };

  useEffect(() => {
    let intervalID: NodeJS.Timer;
    if (isClicked) {
      intervalID = setInterval(changeTime, 10000);
    } else if (!isClicked && counter !== 0) {
      //clearInterval(intervalID);
    }
    return () => {
      clearInterval(intervalID);
    };
  }, [isClicked, counter, changeTime]);

  return { counter, setCounter, toggle };
};

export default useTimer;

import { useState, useEffect, useCallback } from "react";

const useTimer = () => {
  const [counter, setCounter] = useState<number | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  const changeTime = useCallback(() => {
    if (counter !== null && counter > 0) {
      setCounter((prevCounter) => prevCounter ? prevCounter - 1 : null);
    } else {
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
      intervalID = setInterval(changeTime, 60000);
    } 
    return () => {
      clearInterval(intervalID);
    };
  }, [isClicked, counter, changeTime]);

  return { counter, setCounter, toggle };
};

export default useTimer;

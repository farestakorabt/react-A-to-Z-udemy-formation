import { useEffect, useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(1);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <>
      <p>{timer}</p>
    </>
  );
}

export default Timer;

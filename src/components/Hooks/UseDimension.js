import { useEffect, useState } from "react";

function UseDimension() {
  const [dimension, setDimention] = useState();

  useEffect(() => {
    window.addEventListener("resize", resizeScreen);

    function resizeScreen() {
      setDimention(window.innerWidth);
    }
    resizeScreen();

    return () => {
      window.removeEventListener("resize", resizeScreen);
    };
  }, []);

  return dimension;
}

export default UseDimension;

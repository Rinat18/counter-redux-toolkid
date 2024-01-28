import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { decrement, increament, nulled, selectCount } from "./store/countSlice";
import { useDispatch, useSelector } from "react-redux";
import { animated } from "react-spring";

const App = () => {
  let count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="counter">
        {/* Используем animated.div для анимированного элемента */}
        <animated.div
          style={{ color: count === 0 ? "black" : count > 0 ? "green" : "red" }}
          className="count"
        >
          {count}
        </animated.div>
        <div className="btns">
          <Button
            onClick={() => dispatch(increament())}
            variant="contained"
            color="success"
          >
            +
          </Button>
          <Button onClick={() => dispatch(nulled())} color="secondary">
            RESET
          </Button>
          <Button
            onClick={() => dispatch(decrement())}
            variant="outlined"
            color="error"
          >
            -
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;

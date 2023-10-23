/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Add = ({ property1, className, plusClassName, plus = "/img/plus-1-1.png" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`add ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`overlap-group ${state.property1}`}>
        <img className={`plus ${plusClassName}`} alt="Plus" src={plus} />
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "hover",
        };
    }
  }

  if (state.property1 === "hover") {
    switch (action) {
      case "click":
        return {
          property1: "click",
        };
    }
  }

  switch (action) {
    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

Add.propTypes = {
  property1: PropTypes.oneOf(["click", "hover", "default"]),
  plus: PropTypes.string,
};

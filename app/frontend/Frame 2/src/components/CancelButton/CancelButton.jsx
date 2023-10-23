/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CancelButton = ({ variant3 = false, className, divClassName }) => {
  return (
    <button className={`cancel-button ${className}`}>
      <div className={`text-wrapper ${divClassName}`}>Cancel</div>
    </button>
  );
};

CancelButton.propTypes = {
  variant3: PropTypes.bool,
};

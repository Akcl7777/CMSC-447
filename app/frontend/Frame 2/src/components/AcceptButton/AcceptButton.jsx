/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const AcceptButton = ({ variant3 = false, className, divClassName }) => {
  return (
    <div className={`accept-button ${className}`}>
      <div className={`div variant-3-${variant3} ${divClassName}`}>Accept</div>
    </div>
  );
};

AcceptButton.propTypes = {
  variant3: PropTypes.bool,
};

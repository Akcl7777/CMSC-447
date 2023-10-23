/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Remove = ({ variant3 = false, className, removeClassName, remove = "/img/remove-2-3.png" }) => {
  return (
    <div className={`remove ${className}`}>
      <div className="remove-wrapper">
        <img className={`img-2 ${removeClassName}`} alt="Remove" src={remove} />
      </div>
    </div>
  );
};

Remove.propTypes = {
  variant3: PropTypes.bool,
  remove: PropTypes.string,
};

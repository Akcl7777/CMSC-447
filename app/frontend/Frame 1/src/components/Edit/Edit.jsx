/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Edit = ({ variant3 = false, className, editClassName, edit = "/img/edit-2-1.png" }) => {
  return (
    <div className={`edit ${className}`}>
      <div className="edit-wrapper">
        <img className={`img ${editClassName}`} alt="Edit" src={edit} />
      </div>
    </div>
  );
};

Edit.propTypes = {
  variant3: PropTypes.bool,
  edit: PropTypes.string,
};

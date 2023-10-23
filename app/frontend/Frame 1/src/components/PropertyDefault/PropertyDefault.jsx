/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyDefault = ({ className, calendarClassName, calendar = "/img/calendar-1-1.png" }) => {
  return (
    <div className={`property-default ${className}`}>
      <div className="calendar-wrapper">
        <img className={`calendar ${calendarClassName}`} alt="Calendar" src={calendar} />
      </div>
    </div>
  );
};

PropertyDefault.propTypes = {
  calendar: PropTypes.string,
};

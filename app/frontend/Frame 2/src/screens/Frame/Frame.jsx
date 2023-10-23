import React from "react";
import { AcceptButton } from "../../components/AcceptButton";
import { CancelButton } from "../../components/CancelButton";
import { Select } from "../../components/Select";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="div-2">
        <div className="overlap">
          <div className="x-button">
            <img className="img" alt="X button" src="/img/x-button-1-1.png" />
          </div>
        </div>
        <div className="overlap-group">
          <div className="rectangle" />
          <CancelButton className="cancel-button-instance" divClassName="design-component-instance-node" />
          <AcceptButton className="accept-button-instance" divClassName="accept-button-2" />
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-2">Heading</div>
        </div>
        <div className="overlap-2">
          <div className="rectangle-2" />
          <div className="text-wrapper-3">write task here</div>
        </div>
        <div className="overlap-3">
          <Select className="select-instance" property1="default" />
          <div className="text-wrapper-4">Priority</div>
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-5">Calendar Here</div>
        </div>
      </div>
    </div>
  );
};

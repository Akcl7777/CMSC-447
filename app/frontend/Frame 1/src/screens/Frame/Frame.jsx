import React from "react";
import { Add } from "../../components/Add";
import { Edit } from "../../components/Edit";
import { PropertyDefault } from "../../components/PropertyDefault";
import { Remove } from "../../components/Remove";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <Add
        className="design-component-instance-node"
        plus="/img/plus-1.png"
        plusClassName="add-instance"
        property1="default"
      />
      <PropertyDefault
        calendar="/img/calendar-1.png"
        calendarClassName="property-1-default"
        className="design-component-instance-node"
      />
      <Edit className="design-component-instance-node-2" edit="/img/edit-2.png" editClassName="edit-instance" />
      <Remove
        className="design-component-instance-node-2"
        remove="/img/remove-2-2.png"
        removeClassName="remove-instance"
      />
    </div>
  );
};

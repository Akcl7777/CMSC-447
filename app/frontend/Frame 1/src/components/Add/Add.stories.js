import { Add } from ".";

export default {
  title: "Components/Add",
  component: Add,
  argTypes: {
    property1: {
      options: ["click", "hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "click",
    className: {},
    plusClassName: {},
    plus: "/img/plus-1-1.png",
  },
};

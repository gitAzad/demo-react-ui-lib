import React, { FC } from "react";
import { ButtonProps } from "./Button.types";

// Define the Button component as a Functional Component (FC) with the ButtonProps
const Button: FC<ButtonProps> = ({ label, ...rest }) => {
  return <button {...rest}>{label}</button>;
};

export default Button;

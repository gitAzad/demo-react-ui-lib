import { ButtonHTMLAttributes } from "react";

// Define the ButtonProps type, extending ButtonHTMLAttributes to inherit HTML button attributes
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // You can add additional custom props here
  label: string;
}

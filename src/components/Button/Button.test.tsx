import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button", () => {
  test("renders Button component", () => {
    render(<Button label="hye" />);
    expect(screen.getByText(/hye/i)).toBeInTheDocument();
  });
});

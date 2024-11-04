import { render, screen } from "@testing-library/react";
import Message from "../../src/components/Message";
import { it, expect, describe } from "vitest";
import React from "react";

describe("Greet", () => {
  it("It should render name when name is provided", () => {
    render(<Message name="elie" />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/elie/i);
  });
  it("It should render name button when name is not provided", () => {
    render(<Message />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});

import { it, expect, describe } from "vitest";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/vitest";
import UserEvent from "@testing-library/user-event";

describe("Terms and Conditions", () => {
  const renderComponent = () => {
    render(<TermsAndConditions />);
    return {
      heading: screen.getByRole("heading"),
      check: screen.getByRole("checkbox"),
      button: screen.getByRole("button", { name: /submit/i }),
    };
  };
  it("should render corectly with iniitial state", () => {
    const { heading, check, button } = renderComponent();
    expect(heading).toHaveTextContent("Terms And conditions");
    expect(check).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  it("should enable button when checkbox is checked", async () => {
    render(<TermsAndConditions />);
    const{check,button}=renderComponent()
    const user = UserEvent.setup();
    await user.click(check);
    expect(button).toBeEnabled();
  });
});

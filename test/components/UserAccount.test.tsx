import { it, expect, describe } from "vitest";
import { User } from "../../src/lib/types";
import UserAccount from "../../src/components/UserAccount";
import { render,screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/vitest";
describe("User Acount", () => {
  it("Should render User name when user not admin", () => {
    const user: User = {
      id: 1,
      name: "Waridi",
    };
     render(<UserAccount user={user} />)
    expect(screen.getByText(user.name)).toBeInTheDocument()
  });

  it("should render edit button when user is Admin",()=>{
    const user: User = {
      id: 1,
      name: "Me",
      isAdmin:true
    };
    render(<UserAccount user={user} />)
    const button=screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i)
  });
  it("should not render edit button when user is not admin",()=>{
    const user: User = {
      id: 1,
      name: "Lanez",
    };
    render(<UserAccount user={user}/>)
    const button=screen.queryByRole("button")
    expect(button).not.toBeInTheDocument()
  })
});

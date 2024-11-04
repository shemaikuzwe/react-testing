import { User } from "../../src/lib/types";
import UserList from "../../src/components/UserLists";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import React from "react";

describe("User List", () => {
  it("Should render no users when users are empty", () => {
    render(<UserList users={[]} />);
    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it("Should render a list of users", () => {
    const users: User[] = [
      { id: 1, name: "Waridi" },
      { id: 2, name: "lazena" },
    ];
    render(<UserList users={users} />);
    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});

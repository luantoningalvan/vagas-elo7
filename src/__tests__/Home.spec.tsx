import React from "react";
import Home from "../app/(home)/page";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: "trabalhe na elo7",
    });

    expect(heading).toBeInTheDocument();
  });
});

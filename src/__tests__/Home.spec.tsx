import React from "react";
import Home from "../app/(home)/page";
import Layout from "../app/layout";

import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders a heading", () => {
    render(
      <Layout>
        <Home />
      </Layout>
    );

    const heading = screen.getByRole("heading", {
      name: "trabalhe na elo7",
    });

    expect(heading).toBeInTheDocument();
  });
});

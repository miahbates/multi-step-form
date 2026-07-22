import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders the page heading", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: "Multi-step form" }),
    ).toBeInTheDocument();
  });
});

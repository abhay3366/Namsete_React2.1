import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test case", () => {
    // you wright test or it
  test("should load the contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside component", () => {
    render(<Contact />);
    const heading = screen.getByRole("button");
    expect(heading).toBeInTheDocument();
  });
  test("should load 2 input box on the contact number", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(3);
  });
});

import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should display message input with accesible input", () => {
    render(<App />);
    screen.getByLabelText("Message");
  });
  it("should render a submit button", () => {
    render(<App />);
    screen.getByRole("button", { name: "Send" });
  });
});

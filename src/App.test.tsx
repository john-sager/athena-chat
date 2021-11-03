import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
  it("should set aria-disabled on Send button when input is empty", () => {
    render(<App />);
    const sendButton = screen.getByRole("button", { name: "Send" });
    expect(sendButton).toHaveAttribute("aria-disabled", "true");
  });
  it("should not be aria-disabled on Send button when input is populated", () => {
    render(<App />);
    const sendButton = screen.getByRole("button", { name: "Send" });
    const input = screen.getByLabelText("Message");

    userEvent.type(input, "example message");
    expect(sendButton).toHaveAttribute("aria-disabled", "false");
  });
  it("should clear message input when Send is clicked", () => {
    render(<App />);
    const sendButton = screen.getByRole("button", { name: "Send" });
    const input = screen.getByLabelText("Message");

    userEvent.type(input, "example message");
    userEvent.click(sendButton);

    expect(input).toBeEmptyDOMElement();
  });
});

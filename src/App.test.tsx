import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  beforeEach(() => render(<App />));

  it("should display message input with accesible input", () => {
    screen.getByLabelText("Message");
  });
  it("should render a submit button", () => {
    screen.getByRole("button", { name: "Send" });
  });
  it("should set aria-disabled on Send button when input is empty", () => {
    const sendButton = screen.getByRole("button", { name: "Send" });
    expect(sendButton).toHaveAttribute("aria-disabled", "true");
  });
  it("should not be aria-disabled on Send button when input is populated", () => {
    const sendButton = screen.getByRole("button", { name: "Send" });
    const input = screen.getByLabelText("Message");

    userEvent.type(input, "example message");
    expect(sendButton).toHaveAttribute("aria-disabled", "false");
  });
  it("should clear message input when Send is clicked", () => {
    const sendButton = screen.getByRole("button", { name: "Send" });
    const input = screen.getByLabelText("Message");

    userEvent.type(input, "example message");
    expect(input).toHaveValue("example message");
    userEvent.click(sendButton);

    expect(input).toHaveValue("");
  });
  it("should display submitted messages", () => {
    const sendButton = screen.getByRole("button", { name: "Send" });
    const input = screen.getByLabelText("Message");

    userEvent.type(input, "example message");
    expect(input).toHaveValue("example message");
    userEvent.click(sendButton);
    expect(input).toHaveValue("");

    // check that the message is added to the list
    screen.getByText("example message");
  });
});

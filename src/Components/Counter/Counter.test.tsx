import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { Counter } from "./Counter";
import user from "@testing-library/user-event";

describe("counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countelement = screen.getByRole("heading");
    expect(countelement).toBeInTheDocument();

    const incrementelement = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementelement).toBeInTheDocument();
  });

  test("render a count value", () => {
    render(<Counter />);
    const countelement = screen.getByRole("heading");
    expect(countelement).toHaveTextContent("0");
  });

  test("render the element after event handling", async () => {
    user.setup();
    render(<Counter />);
    const incrementelement = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementelement);
    const countelememt = screen.getByRole("heading");
    expect(countelememt).toHaveTextContent("1");
  });

  test("element after clicking the elememt twice", async () => {
    user.setup();
    render(<Counter />);
    const incrementelememt = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementelememt);
    await user.click(incrementelememt);
    const countelememt = screen.getByRole("heading");
    expect(countelememt).toHaveTextContent("2");
  });
  test("element after clicking the elememt thrice", async () => {
    user.setup();
    render(<Counter />);
    const incrementelememt = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementelememt);
    await user.click(incrementelememt);
    await user.click(incrementelememt);

    const countelememt = screen.getByRole("heading");
    expect(countelememt).toHaveTextContent("3");
  });
  test("focus on the element when we hover", async () => {
    user.setup();
    render(<Counter />);
    const incrementcount = screen.getByRole("button", {
      name: "Increment",
    });
    const amountinput = screen.getByRole("spinbutton");
    const setbutton = screen.getByRole("button", {
      name: "Set",
    });

    await user.tab();
    expect(incrementcount).toHaveFocus();
    await user.tab();
    expect(amountinput).toHaveFocus();

    await user.tab();
    expect(setbutton).toHaveFocus();
  });
});

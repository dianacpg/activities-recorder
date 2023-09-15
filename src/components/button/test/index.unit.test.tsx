import { expect, describe, it, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Button, { ButtonProps } from "..";

describe("Button component", () => {
  const testComponent = (skin?: ButtonProps["skin"], onClick?: ButtonProps["onClick"]) =>
    render(
      <Button skin={skin} onClick={onClick}>
        Click Me
      </Button>
    );
  it("renders the Button component", () => {
    const { getByText } = testComponent();
    const buttonElement = getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
  });

  it("applies the 'default' skin", () => {
    const { getByText } = testComponent();
    const buttonElement = getByText("Click Me");
    expect(buttonElement).toHaveClass("button");
  });

  it("applies the 'ghost' skin", () => {
    const { getByText } = testComponent("ghost");
    const buttonElement = getByText("Click Me");
    expect(buttonElement).toHaveClass("button--ghost");
  });

  it("fires click event when button is clicked", () => {
    const onClickMock = vi.fn();
    const { getByText } = testComponent("ghost", onClickMock);
    const buttonElement = getByText("Click Me");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});

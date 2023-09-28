import { expect, describe, it, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Components
import Button, { ButtonProps } from "..";

describe("Button component", () => {
  const testComponent = (skin?: ButtonProps["skin"], onClick?: ButtonProps["onClick"]) =>
    render(
      <Button skin={skin} onClick={onClick}>
        Click Me
      </Button>
    );
  it("renders the Button component", () => {
    expect(testComponent).toMatchSnapshot();
  });

  it("applies the 'ghost' skin", () => {
    expect(testComponent("ghost")).toMatchSnapshot();
  });

  it("fires click event when button is clicked", () => {
    const onClickMock = vi.fn();
    const { getByText } = testComponent("ghost", onClickMock);
    const buttonElement = getByText("Click Me");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});

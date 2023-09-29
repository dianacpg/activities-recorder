// Test
import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Component
import Dialog, { DialogProps } from "../Dialog";

describe("Dialog component", () => {
  const defaultProps: DialogProps = {
    title: "Test Dialog",
    description: "This is a test dialog.",
    onConfirm: vi.fn(),
    onCancel: vi.fn(),
  };

  it("renders Dialog component", () => {
    expect(render(<Dialog {...defaultProps} />)).toMatchSnapshot();
  });

  it("calls onConfirm when Confirm button is clicked", () => {
    const { getByTestId } = render(<Dialog {...defaultProps} />);
    fireEvent.click(getByTestId("confirm-dialog"));
    expect(defaultProps.onConfirm).toHaveBeenCalled();
  });

  it("calls onCancel when Cancel button is clicked", () => {
    const { getByTestId } = render(<Dialog {...defaultProps} />);
    fireEvent.click(getByTestId("cancel-dialog"));
    expect(defaultProps.onCancel).toHaveBeenCalled();
  });
});

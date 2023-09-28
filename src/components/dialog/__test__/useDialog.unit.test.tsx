// Testing
import { expect, describe, it } from "vitest";
// Testing
import { renderHook, act } from "@testing-library/react";
// Context
import { DialogProvider, DialogContextDefaults } from "../DialogContext";
// Hook
import { useDialog } from "../hooks";

describe("useDialog", () => {
  it("should return the default context values", () => {
    const { result } = renderHook(() => useDialog(), {
      wrapper: DialogProvider,
    });

    expect(result.current.isDialogOpen).toBe(false);
    expect(typeof result.current.setDialogOpen).toBe("function");
    expect(typeof result.current.openConfirmation).toBe("function");
    expect(typeof result.current.setConfirmationDialog).toBe("function");
  });

  it("should update context values when using context methods", () => {
    const { result } = renderHook(() => useDialog(), {
      wrapper: DialogProvider,
    });

    act(() => {
      result.current.setDialogOpen(true);
      result.current.setConfirmationDialog({
        ...DialogContextDefaults,
        openConfirmation: (props) => props,
      });
    });

    expect(result.current.isDialogOpen).toBe(true);
    expect(
      result.current.openConfirmation({
        title: "lorem",
        description: "ipsum",
        onConfirm: () => undefined,
        onCancel: () => undefined,
      })
    ).toEqual({
      title: "lorem",
      description: "ipsum",
      onConfirm: expect.any(Function),
      onCancel: expect.any(Function),
    });
  });
});

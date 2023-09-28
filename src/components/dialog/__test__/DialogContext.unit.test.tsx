// React
import React from "react";
// Testing
import { expect, describe, it } from "vitest";
import { render, fireEvent } from "@testing-library/react";
// Context
import { DialogContext, DialogProvider } from "../DialogContext";

describe("Dialog Context", () => {
  it("should render children", () => {
    const { getByText } = render(
      <DialogProvider>
        <div>Test Content</div>
      </DialogProvider>
    );

    expect(getByText("Test Content")).toBeInTheDocument();
  });

  it("should provide default context values", () => {
    const ConsumerComponent = () => {
      const context = React.useContext(DialogContext);
      return (
        <div>
          <span>{context.isDialogOpen.toString()}</span>
        </div>
      );
    };

    const { getByText } = render(
      <DialogProvider>
        <ConsumerComponent />
      </DialogProvider>
    );

    expect(getByText("false")).toBeInTheDocument();
  });

  it("should update context values when using context methods", () => {
    const ConsumerComponent = () => {
      const context = React.useContext(DialogContext);
      return (
        <div>
          <span>{context.isDialogOpen.toString()}</span>
          <button onClick={() => context.setDialogOpen(true)}>Open Dialog</button>
        </div>
      );
    };

    const { getByText, getByRole } = render(
      <DialogProvider>
        <ConsumerComponent />
      </DialogProvider>
    );

    const openDialogButton = getByRole("button", { name: "Open Dialog" });

    expect(getByText("false")).toBeInTheDocument();

    fireEvent.click(openDialogButton);

    expect(getByText("true")).toBeInTheDocument();
  });
});

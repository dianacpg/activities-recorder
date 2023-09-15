import { expect, describe, it } from "vitest";
import { render } from "@testing-library/react";
// Components
import EmptyState from "..";

describe("EmptyState", () => {
  it("renders EmptyState component without errors", () => {
    const { getByText } = render(<EmptyState />);

    expect(getByText("There is no activities recorded yet.")).toBeInTheDocument();
  });
});

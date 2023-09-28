import { expect, describe, it } from "vitest";
import { render } from "@testing-library/react";
// Components
import EmptyState from "..";

describe("EmptyState", () => {
  it("renders EmptyState component without errors", () => {
    const testComponent = render(<EmptyState />);

    expect(testComponent).toMatchSnapshot();
  });
});

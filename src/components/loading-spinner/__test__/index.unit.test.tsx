import { expect, describe, it } from "vitest";
import { render } from "@testing-library/react";
// Components
import LoadingSpinner from "..";

describe("LoadingSpinner", () => {
  it("renders loading spinner component without errors", () => {
    expect(render(<LoadingSpinner />)).toMatchSnapshot();
  });
});

import { expect, describe, it, vi } from "vitest";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Stopwatch from "..";

vi.mock("../../../lib/utils/format-seconds", () => ({
  formatSeconds: (seconds: number) => `mocked:${seconds}`,
}));

describe("Stopwatch component", () => {
  const onStopMock = vi.fn();
  const testComponent = <Stopwatch onStop={onStopMock} />;

  it("renders without errors", () => {
    expect(render(testComponent)).toMatchSnapshot();
  });

  it("starts recording when the button is clicked and stops when clicked again", async () => {
    render(testComponent);

    const toggleButton = screen.getByRole("button");

    fireEvent.click(toggleButton); // Start recording
    await waitFor(() => expect(onStopMock).not.toHaveBeenCalled());

    fireEvent.click(toggleButton); // Stop recording
    await waitFor(() => expect(onStopMock).toHaveBeenCalled());
  });

  it("displays the elapsed time while recording", async () => {
    render(testComponent);

    const toggleButton = screen.getByRole("button");

    fireEvent.click(toggleButton); // Start recording
    await waitFor(() => expect(screen.getByText("mocked:1")).toBeInTheDocument());

    fireEvent.click(toggleButton); // Stop recording
  });
});

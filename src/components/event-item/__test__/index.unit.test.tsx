import { expect, describe, it, vi } from "vitest";
// Testing
import { render, screen, fireEvent } from "@testing-library/react";
// Component
import EventItem from "./../";

const mockEvent = {
  id: 1,
  dateStart: "2023-08-11T09:00:00",
  dateEnd: "2023-08-11T11:00:00",
  title: "Test Event",
};
const handleUpdateMock = vi.fn();
const handleDeleteMock = vi.fn();
const mockElement = (
  <EventItem event={mockEvent} onDelete={handleDeleteMock} onUpdate={handleUpdateMock} />
);

describe("EventItem", () => {
  it("renders the event title", () => {
    expect(render(mockElement)).toMatchSnapshot();
  });

  it("allows editing the event title", () => {
    const { getByText, getByRole } = render(mockElement);

    const eventTitle = getByText("Test Event");
    fireEvent.click(eventTitle);

    const inputField = getByRole("textbox") as HTMLInputElement;
    expect(inputField).toBeInTheDocument();

    fireEvent.change(inputField, { target: { value: "Updated Title" } });
    expect(inputField.value).toBe("Updated Title");
  });

  it("calls the onUpdate function when title is updated", () => {
    const { getByText } = render(mockElement);

    const eventTitle = getByText("Test Event");
    fireEvent.click(eventTitle);

    const inputField = screen.getByRole("textbox");
    fireEvent.change(inputField, { target: { value: "Updated Title" } });

    fireEvent.blur(inputField);
    expect(handleUpdateMock).toHaveBeenCalledWith("Updated Title", mockEvent);
  });
});

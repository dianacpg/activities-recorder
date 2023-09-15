import { expect, describe, it, vi } from "vitest";
import { render } from "@testing-library/react";
// Components
import Calendar from "..";
// Types
import { GroupedEventsData } from "../../../store/selectors/user-events";

describe("Calendar", () => {
  const mockEvents: GroupedEventsData = {
    sortedGroupKeys: ["2023-08-24"],
    groupedEvents: {
      "2023-08-24": [
        { id: 1, title: "Event 1", dateStart: "monday", dateEnd: "friday" },
        { id: 2, title: "Event 2", dateStart: "monday", dateEnd: "friday" },
      ],
    },
  };

  it("renders empty state if no events", () => {
    const { container } = render(
      <Calendar
        events={{ sortedGroupKeys: undefined, groupedEvents: undefined }}
        onDelete={() => vi.fn()}
        onUpdate={() => vi.fn()}
      />
    );

    expect(container.querySelector(".empty-state")).toBeInTheDocument();
  });

  it("renders day items if has events", () => {
    const { getAllByText } = render(
      <Calendar events={mockEvents} onDelete={() => vi.fn()} onUpdate={() => vi.fn()} />
    );
    const eventTitles = getAllByText(/Event/);
    expect(eventTitles).toHaveLength(2);
  });
});

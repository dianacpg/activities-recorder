import { GroupedEvents } from "../../store/selectors/user-events";
import { UserEvent } from "../services";
import { createDateKey } from "./create-date-key";

/**
 * Adds an event to the group corresponding to the given date key.
 *
 * @param dateKey - The date key for grouping events (in the format 'YYYY-MM-DD').
 * @param  event - The UserEvent object to be added to the group.
 * @param groups - groups where event is being injected
 */

// Adds an event to the group corresponding to the given date key.
const addToGroup = (dateKey: string, event: UserEvent, groups: GroupedEvents) => {
  if (groups[dateKey] === undefined) {
    groups[dateKey] = [];
  }

  groups[dateKey].push(event);
};

/**
 * Groups an array of UserEvent objects by day based on their dateStart and dateEnd properties.
 *
 * @param events - An array of UserEvent objects to be grouped.
 * @returns An object with date keys as properties and arrays of UserEvent objects as values.
 */

export const groupEventsByDay = (events: UserEvent[]): Record<string, UserEvent[]> => {
  const groups: GroupedEvents = {};

  events.forEach((event) => {
    const dateStartKey = createDateKey(new Date(event.dateStart)).fullDate;
    const dateEndKey = createDateKey(new Date(event.dateEnd)).fullDate;
    addToGroup(dateStartKey, event, groups);

    if (dateEndKey !== dateStartKey) {
      addToGroup(dateEndKey, event, groups);
    }
  });

  return groups;
};

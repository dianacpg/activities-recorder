// React
import { ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
// Components
import Calendar from "./../components/calendar";
import Dialog from "../components/dialog";
import LoadingSpinner from "./../components/loading-spinner";
import Stopwatch from "./../components/stopwatch";
// Store
import {
  createUserEvent,
  deleteUserEvent,
  fetchUserEvents,
  updateUserEvent,
} from "./../store/modules/user-events";
import { selectGroupedEvents } from "./../store/selectors/user-events";
// Types
import { UserEvent } from "./../lib/services";
import { useAppDispatch } from "../store/hooks";

function Main(): ReactElement {
  const dispatch = useAppDispatch();
  const events = useSelector(selectGroupedEvents);
  const isLoading = events?.loading;

  const handleStopStopwatch = (dateStart: string | undefined) => {
    if (!dateStart) return;
    dispatch(createUserEvent({ dateStart }));
  };

  const handleDeleteEvent = (id: number) => {
    dispatch(deleteUserEvent(id));
  };

  const handleUpdateEvent = (title: string, event: UserEvent) => {
    if (title !== event.title) {
      const { id, ...updatedEvent } = event;

      dispatch(updateUserEvent({ id, dto: { ...updatedEvent, title } }));
    }
  };

  useEffect(() => {
    void dispatch(fetchUserEvents());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Stopwatch onStop={(dateStart) => handleStopStopwatch(dateStart)} />
          <Calendar
            events={events}
            onDelete={(id) => handleDeleteEvent(id)}
            onUpdate={handleUpdateEvent}
          />
          <Dialog />
        </>
      )}
    </div>
  );
}

export default Main;

import ErrorAlert from "@/components/ui/error-alert";
import Container from "@/components/ui/container"
import EventCard from "@/components/ui/event-card";
import { IGetGoodEventResponse } from "@/interfaces";
import AxiosCleint from "@/lib/axios-client";

const getAllEvents = async () => {
  try {
    const events = await AxiosCleint.get('/events');
    return events.data as IGetGoodEventResponse;
  } catch (error) {
    return null;
  }
}

const EventsPage = async () => {
  const events = await getAllEvents();

  return (
    <Container>
      <div className="w-full pt-4 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {!events && (
              <ErrorAlert />
          )}
          
          {events?.data.map((event) => (
            <EventCard
              endDateTime={event.endDateTime}
              key={event._id}
              _id={event._id}
              price={event.price}
              startDateTime={event.startDateTime}
              name={event.name}
              description={event.description}
              image=""
              organizer={event.organizer}
              location={event.location}
              category={event.category} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default EventsPage
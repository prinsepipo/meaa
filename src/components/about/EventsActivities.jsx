import * as React from "react";

import { events } from "../../data";

import "./EventsActivities.scss";


const EventsActivities = () => {
  return (
    <ul className="event-list">
      {events.map((event, i) => (
        <li className="event-item" key={i}>
          <div>
            <h4 className="event-heading">{event.name}</h4>
            <p className="event-details">{event.details}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};


export default EventsActivities;

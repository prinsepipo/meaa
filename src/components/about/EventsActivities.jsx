import * as React from "react";

import { useStaticQuery, graphql } from "gatsby";

import "./EventsActivities.scss";


const EventsActivities = () => {
  const data = useStaticQuery(graphql`
    query {
      allEventsJson {
        edges {
          node {
            name
            details
          }
        }
      }
    }
  `);

  const events = data.allEventsJson.edges;

  return (
    <ul className="event-list">
      {events.map((item, i) => {
        const event = item.node;

        return (
          <li className="event-item" key={i}>
            <div>
              <h4 className="event-heading">{event.name}</h4>
              <p className="event-details">{event.details}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};


export default EventsActivities;

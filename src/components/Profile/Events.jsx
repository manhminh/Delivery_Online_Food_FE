import React from "react";
import EventCard from "./EventCard";

const Events = () => {
  return (
    <div className="flex flex-wrap gap-5 my-5 px-5 justify-around">
      {[1, 1, 1, 1, 1].map((item, index) => (
        <EventCard />
      ))}
    </div>
  );
};

export default Events;

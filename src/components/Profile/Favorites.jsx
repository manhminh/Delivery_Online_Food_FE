import React from "react";
import RestaurantCard from "../Restaurant/RestaurantCard";

const Favorites = () => {
  return (
    <div className="p-5">
      <h1 className="text-xl font-semibold">My Favorites</h1>

      <div className="my-10">
        <div className="flex flex-wrap justify-around gap-3">
          {[1, 1, 1, 1].map((item, index) => (
            <RestaurantCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;

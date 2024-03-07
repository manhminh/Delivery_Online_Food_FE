import React from "react";
import RestaurantCard from "../Restaurant/RestaurantCard";
import { useSelector } from "react-redux";

const Favorites = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <div className="p-5">
      <h1 className="text-xl font-semibold">My Favorites</h1>

      <div className="my-10">
        <div className="flex flex-wrap justify-around gap-3">
          {auth.user.favorites.map((item, index) => (
            <RestaurantCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;

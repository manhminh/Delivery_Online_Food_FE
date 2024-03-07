import React, { useEffect } from "react";
import "./HomePage.css";
import MultiItemsCarousel from "./MultiItemsCarousel";
import RestaurantCard from "../Restaurant/RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllRestaurants } from "../../redux/restaurant/restaurantAction";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRestaurants());
  }, []);

  const restaurant = useSelector((state) => state.restaurant);
  console.log("restaurant: ", restaurant);

  return (
    <div className="pb-10">
      <section className="banner -z-50 relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl lg:text-6xl font-bold z-10 py-5">
            Delivery Food
          </p>

          <p className="z-10 text-gray-300 text-xl lg:text-4xl">
            Taste Convenience: Food, Fast and Delivered.
          </p>
        </div>

        <div className="cover absolute top-0 left-0 right-0"></div>

        <div className="fadout"></div>
      </section>

      <section className="p-10 lg:py-10 lg:px-20">
        <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
          Top Meels
        </p>
        <MultiItemsCarousel />
      </section>

      <section className="px-5 lg:px-20 pt-10">
        <h1 className="text-2xl font-semibold text-gray-400 py-3">
          Order From Our Handpicked Favourites
        </h1>

        <div className="flex justify-center">
          <div className="flex flex-wrap justify-around items-center gap-5">
            {restaurant.restaurants.map((item, index) => (
              <RestaurantCard key={index + 1} item={item} />
            ))}
          </div>
        </div>

        <div></div>
      </section>
    </div>
  );
};

export default HomePage;

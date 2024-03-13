import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuCard from "./MenuCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getRestaurantById,
  getRestaurantsCategory,
} from "../../redux/restaurant/restaurantAction";
import { getMenuItemByRestaurantId } from "../../redux/menu/menuAction";

const RestaurantDetails = () => {
  const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegetarian only", value: "vegetarian" },
    { label: "Non-Vegetarian", value: "non_vegetarian" },
    { label: "Seasonal", value: "seasonal" },
  ];

  const [foodType, setFoodType] = React.useState("all");

  const handleFilter = (e, value) => {
    setFoodType(value);
  };

  const auth = useSelector((state) => state.auth);

  const restaurant = useSelector((state) => state.restaurant);

  const menu = useSelector((state) => state.menu);

  const [selectedCategory, setSelectedCategory] = React.useState("");

  const { id } = useParams();

  const dispatch = useDispatch();

  const handleSelectedCategory = (e, value) => {
    setSelectedCategory(value);
    console.log(value);
  };

  useEffect(() => {
    dispatch(getRestaurantById(id));
    dispatch(getRestaurantsCategory(id));
  }, [id]);

  useEffect(() => {
    dispatch(
      getMenuItemByRestaurantId({
        restaurantId: id,
        isVegetarian: foodType === "vegetarian",
        isNonVeg: foodType === "non_vegetarian",
        isSeasonal: foodType === "seasonal",
        foodCategory: selectedCategory,
      })
    );
  }, [selectedCategory, id, foodType]);

  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          Home/America/American fast food/3
        </h3>

        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src={restaurant.restaurant?.images[0]}
                alt=""
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src={
                  restaurant.restaurant?.images[1]
                    ? restaurant.restaurant?.images[1]
                    : restaurant.restaurant?.images[0]
                }
                alt=""
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src={
                  restaurant.restaurant?.images[2]
                    ? restaurant.restaurant?.images[2]
                    : restaurant.restaurant?.images[0]
                }
                alt=""
              />
            </Grid>
          </Grid>
        </div>

        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">
            {restaurant.restaurant?.name}
          </h1>
          <p className="text-gray-500 mt-1">
            {restaurant.restaurant?.description}
          </p>

          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />

              <span>123 Main Street, Anytown USA</span>
            </p>

            <p className="text-gray-500 flex items-center gap-3">
              <CalendarTodayIcon />

              <span>Mon-Sun: 9:00 AM - 9:00 PM (Today)</span>
            </p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="pt-[2rem] lg:flex relative">
        <div className="lg:w-[20%] filter space-y-10">
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {foodTypes.map((item, index) => (
                    <FormControlLabel
                      key={index + 1}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>

            <Divider />

            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleSelectedCategory}
                  name="food_category"
                  value={selectedCategory}
                >
                  {restaurant?.categories.map((item, index) => (
                    <FormControlLabel
                      key={index + 1}
                      value={item.name}
                      control={<Radio />}
                      label={item.name}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>

        <div className="lg:w-[80%] lg:pl-10 pb-8 space-y-5">
          {menu.menuItems.map((item, index) => (
            <MenuCard item={item} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;

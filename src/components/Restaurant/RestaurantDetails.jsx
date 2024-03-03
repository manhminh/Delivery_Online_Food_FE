import {
  Divider,
  FormControl,
  Grid,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const RestaurantDetails = () => {
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
                src="https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </Grid>
          </Grid>
        </div>

        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">American Fast Food</h1>
          <p className="text-gray-500 mt-1">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
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
          <div>
            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
              Food Type
            </Typography>

            <FormControl className="py-10 space-y-5" component={"fieldset"}>
              <RadioGroup></RadioGroup>
            </FormControl>
          </div>
        </div>

        <div className="lg:w-[80%] filter lg:pl-10 space-y-5">Menu</div>
      </section>
    </div>
  );
};

export default RestaurantDetails;

import { Card, Chip, IconButton } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const RestaurantCard = () => {
  return (
    <Card className="w-[18rem]">
      <div
        className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}
      >
        <img
          src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />

        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={true ? "success" : "error"}
          label={true ? "Open" : "Closed"}
        />
      </div>

      <div className="p-4 textPart lg:flex w-full justify-between">
        <div>
          <p className="font-semibold text-lg">American Fast Food</p>

          <p className="text-sm text-gray-500">
            Craving it all? Dive it to globals fla...
          </p>
        </div>

        <div>
          <IconButton>
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;

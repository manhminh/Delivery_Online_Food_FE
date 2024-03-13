import { Card, Chip, IconButton } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { isPresentInFavorites } from "../../utils/logic";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite } from "../../redux/user/userAction";
import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ item }) => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleAddToFavorites = () => {
    dispatch(addToFavorite(item.id));
  };

  const handleNavigateToRestaurant = () => {
    if (item.open) {
      navigate(`/restaurant/${item.address.city}/${item.name}/${item.id}`);
    }
  };

  return (
    <Card className="w-[18rem]">
      <div
        className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}
      >
        <img src={item.images[0]} alt="" />

        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={item.open ? "success" : "error"}
          label={item.open ? "Open" : "Closed"}
        />
      </div>

      <div className="p-4 textPart lg:flex w-full justify-between">
        <div>
          <p
            className="font-semibold text-lg cursor-pointer"
            onClick={handleNavigateToRestaurant}
          >
            {item.name}
          </p>

          <p className="text-sm text-gray-500">{item.description}</p>
        </div>

        <div>
          <IconButton onClick={handleAddToFavorites}>
            {isPresentInFavorites(auth.user?.favorites, item) ? (
              <FavoriteIcon color="error" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;

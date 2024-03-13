import { Chip, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem, updateCartItem } from "../../redux/cart/cartAction";

const CartItem = ({ item }) => {
  const cart = useSelector((state) => state.cart.cart);

  console.log(cart);

  const dispatch = useDispatch();

  const handleUpdateCartItem = (value) => {
    if (value === -1 && item.quantity === 1) {
      handleRemoveCartItem();
    }

    const reqData = {
      cartItem: {
        cartItemId: item.id,
        quantity: item.quantity + value,
      },
    };
    dispatch(updateCartItem(reqData));
  };

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item.id));
  };

  return (
    <div className="px-5">
      <div className="lg:flex items-center lg:space-x-5">
        <div>
          <img
            src={item.food.images[0]}
            className="w-[5rem] h-[5rem] object-cover"
            alt=""
          />
        </div>

        <div className="flex items-center justify-between lg:w-[70%]">
          <div className="space-y-1 lg:space-y-3 w-full">
            <p>{item.food.name}</p>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1">
                <IconButton onClick={() => handleUpdateCartItem(-1)}>
                  <RemoveCircleOutlineIcon />
                </IconButton>

                <div className="w-5 h-5 text-xs flex items-center justify-center">
                  {item.quantity}
                </div>

                <IconButton onClick={() => handleUpdateCartItem(1)}>
                  <AddCircleOutlineIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <p>${item.price}</p>
        </div>
      </div>

      <div className="pt-3 space-x-2">
        {item.ingredients.map((ingredient, index) => (
          <Chip key={index + 1} label={ingredient} />
        ))}
      </div>
    </div>
  );
};

export default CartItem;

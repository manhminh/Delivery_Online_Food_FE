import { Button, Card } from "@mui/material";
import React from "react";

const OrderCard = ({ item, order }) => {
  console.log(order);
  return (
    <Card className="flex justify-between items-center p-5">
      <div className="flex items-center space-x-5">
        <img
          src={item.food?.images[0]}
          className="w-16 h-16 object-cover"
          alt=""
        />
        <div>
          <p>{item.food.name}</p>
          <p>${item.totalPrice} </p>
        </div>
      </div>
      <div>
        <Button className="cursor-not-allowed">{order.orderStatus}</Button>
      </div>
    </Card>
  );
};

export default OrderCard;

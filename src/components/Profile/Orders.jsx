import React, { useEffect } from "react";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { getUsersOrders } from "../../redux/order/orderAction";

const Orders = () => {
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();
  console.log(order);

  useEffect(() => {
    dispatch(getUsersOrders());
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl text-center py-7 font-semibold">My Orders</h1>

      <div className="space-y-5 w-full lg:w-1/2">
        {order.orders.map((order, index) =>
          order.items.map((item) => (
            <OrderCard order={order} key={index} item={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;

import React, { useContext } from "react";
import { OrdApi } from "../../Context/OrdersApi";

const CartBar = ({ dish }) => {
  const { createOrder } = useContext(OrdApi);
  return (
    <div
      onClick={() => createOrder(dish)}
      className="CartBar w-full p-4 flex justify-center items-center text-center cursor-pointer border-t-4 border-gray-300 fixed bottom-0 left-0 z-50 bg-white"
    >
      <h3 className="mx-2">Cart Bar</h3>
      <i className="fa-solid fa-plus"></i>
    </div>
  );
};

export default CartBar;

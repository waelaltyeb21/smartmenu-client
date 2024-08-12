import { useContext } from "react";
import { OrdApi } from "../../Context/OrdersApi";

const CartCard = ({ order, lang }) => {
  const { increaseQuantity, decreaseQuantity, deleteOrder } =
    useContext(OrdApi);
  const name = lang == "en" ? order.name.en : order.name.ar;
  const url = import.meta.env.VITE_REACT_IMAGE_URL;
  const image = `${url + order.image}`;
  return (
    <div className="CartCard flex rounded-xl py-4 px-2 mb-2 border-4">
      <div className="imgContainer">
        <img
          className="w-16"
          src={`${image}`}
          alt="order image"
        />
      </div>
      <div
        className={`details w-full flex flex-col justify-between content-center font-semibold ${
          lang == "en" ? "ml-4" : "mr-4"
        }`}
      >
        <div className="head mb-2 flex justify-between items-center">
          <h1>
            <span className="capitalize">{name}</span> x {order.quantity}
          </h1>
          <button onClick={() => deleteOrder(order._id)}>
            <i className="fa-solid fa-trash text-red-600"></i>
          </button>
        </div>
        <div className="foot flex justify-between items-center">
          <span className="">{order.price}</span>
          <div className="btns">
            <button onClick={() => increaseQuantity(order)}>+</button>
            <span className="mx-2">{order.price * order.quantity}</span>
            <button onClick={() => decreaseQuantity(order)}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

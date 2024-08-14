import { useContext } from "react";
import { OrdApi } from "../../Context/OrdersApi";

const DishCard = ({ dish, lang }) => {
  // Create New Order
  const { createOrder } = useContext(OrdApi);
  const name = lang == "ar" ? dish.name.ar : dish.name.en;
  const currency = lang == "en" ? "SDG" : "ج";
  const url = import.meta.env.VITE_REACT_IMAGE_URL;
  const image = `${`${url}` + dish.image}`;
  return (
    <div className="DishCard outline-dashed outline-offset-4 font-bold capitalize flex justify-between items-center px-2 min-h-20 cursor-pointer rounded-xl mb-4">
      <div className="dishDetails flex items-center">
        <div className="imgContainer max-w-10">
          <img className="object-cover" src={image} alt="image" />
        </div>
        <div className="mx-2 flex flex-col content-center justify-center">
          <h1 className="text-xl">{name}</h1>
          <span>
            {dish.price} {currency}
          </span>
        </div>
      </div>
      <div className="cart">
        <button
          className="text-slate-900 outline-dashed outline-3 px-2 py-0.5 rounded font-semibold"
          onClick={() => createOrder(dish)}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default DishCard;

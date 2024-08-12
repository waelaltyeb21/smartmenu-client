import BackButton from "../BackButton/BackButton";
import CartCard from "../CartCard/CartCard";

const CartList = ({ orders, total, lang }) => {
  return (
    <div className="CartList">
      <div className="btns mb-4 flex justify-between items-center">
        <h3 className="text-2xl font-bold">
          {lang == "en" ? "Cart List" : "سلة الطبات"}
        </h3>
        <BackButton toPage={"/"} />
      </div>
      <div className="total standarStyle mb-4 *:mx-1 text-center text-2xl p-2 rounded-md">
        <span>{lang == "en" ? "Total" : "الاجمالي"}</span>
        <span>
          {total} {lang == "en" ? "SDG" : "ج"}
        </span>
      </div>
      {orders.map((order) => (
        <CartCard order={order} key={order._id} lang={lang} />
      ))}
    </div>
  );
};

export default CartList;

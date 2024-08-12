import { useContext } from "react";
import { OrdApi } from "../Context/OrdersApi";
import { Link } from "react-router-dom";
import { LangSwitcher } from "../Context/SwitcherApi";
import CartList from "../Components/CartList/CartList";
import EmptyCart from "../Components/EmptyCart/EmptyCart";
import Button from "../Components/Button/Button";

const Cart = () => {
  const { orders, total } = useContext(OrdApi);
  console.log(orders)
  const [lang] = useContext(LangSwitcher);
  const text = lang == "en" ? "Show Bill" : "عرض الفاتورة";
  if (orders == null || orders.length == 0) return <EmptyCart />;
  return (
    <div className="relative min-h-[90dvh] mb-20">
      <CartList orders={orders} total={total} lang={lang} />
      <Button GoTo={"/invoice"} text={text} icon={"cart-shopping"} />
    </div>
  );
};

export default Cart;

import { useContext } from "react";
import { OrdApi } from "../Context/OrdersApi";
import { LangSwitcher } from "../Context/SwitcherApi";
import CartList from "../Components/CartList/CartList";
import EmptyCart from "../Components/EmptyCart/EmptyCart";
import Button from "../Components/Button/Button";

const Cart = () => {
  // Extract Orders From Context Api
  const { orders, total } = useContext(OrdApi);
  const [lang] = useContext(LangSwitcher); // Language Detector
  const text = lang == "en" ? "Show Bill" : "عرض الفاتورة"; // Button Text
  if (orders == null || orders.length == 0) return <EmptyCart />; // Check If There Is Orders Or No
  return (
    <div className="relative min-h-[90dvh] mb-20">
      <CartList orders={orders} total={total} lang={lang} />
      <Button GoTo={"/invoice"} text={text} icon={"cart-shopping"} />
    </div>
  );
};

export default Cart;

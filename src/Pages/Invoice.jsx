import React, { useContext, useEffect, useState } from "react";
import { LangSwitcher } from "../Context/SwitcherApi";
import { OrdApi } from "../Context/OrdersApi";
import { useNavigate } from "react-router";
import Message from "../Components/Message/Message";

const Invoice = () => {
  const [lang] = useContext(LangSwitcher);  // Detect Language
  const [show, setShow] = useState(false); // Show Message 
  const { orders, total } = useContext(OrdApi); // Extract Orders From Context Api
  const text = lang == "en" ? "Complated" : "اكتمل الطلب"; // Button Text
  const navigate = useNavigate();
  // Navigate To Home Page If There Is No Orders
  useEffect(() => {
    if (orders == null || orders.length == 0) navigate("/");
  }, []);
  return (
    <div className="Invoice mb-20">
      <table className="table table-fixed min-w-full w-auto overflow-x-scroll border-collapse border border-slate-200 *:border-collapse *:border *:border-slate-500 capitalize">
        <thead className="bg-slate-500 text-slate-100 border-collapse border border-slate-200">
          <tr className="*:border *:border-slate-500 *:p-2">
            <th>{lang == "en" ? "Order" : "الطلب"}</th>
            <th>{lang == "en" ? "Price" : "السعر"}</th>
            <th>{lang == "en" ? "Qy" : "الكمية"}</th>
            <th>{lang == "en" ? "Total" : "الاجمالي"}</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order._id}
              className="*:border *:border-slate-500 *:p-2 *:even:bg-slate-400 *:even:text-slate-100"
            >
              <th>{lang == "en" ? order.name.en : order.name.ar}</th>
              <th>{order.price}</th>
              <th>{order.quantity}</th>
              <th>{order.price * order.quantity}</th>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th className="p-2 bg-slate-400 text-slate-100" colSpan={4}>
              {total} {lang == "en" ? "SDG" : "ج"}
            </th>
          </tr>
        </tfoot>
      </table>
      {show && <Message />}
      <div className="confirmOrders w-full p-4 flex items-center justify-center fixed bottom-0 left-0">
        <button
          onClick={() => setShow((prv) => !prv)}
          className="bg-indigo-600 text-slate-100 font-bold text-xl px-8 py-2 rounded-md"
        >
          <span>{text}</span>
          <i className={`fa-solid fa-print mx-2`}></i>
        </button>
      </div>
    </div>
  );
};

export default Invoice;

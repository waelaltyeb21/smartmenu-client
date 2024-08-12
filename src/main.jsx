import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SwitcherApi from "./Context/SwitcherApi.jsx";
import OrdersApi from "./Context/OrdersApi.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <OrdersApi>
    <SwitcherApi>
      <App />
    </SwitcherApi>
  </OrdersApi>
);

import { useContext } from "react";
import { OrdApi } from "../../Context/OrdersApi";
import { useNavigate } from "react-router";

const Message = () => {
  const { clearOrders } = useContext(OrdApi);
  const navigate = useNavigate();
  const complatedOrder = () => {
    clearOrders();
    navigate("/", { replace: true });
  };
  return (
    <div className="Message">
      <div className="msgContainer fixed left-0 top-0 h-full w-full flex justify-center items-center backdrop-blur-sm z-40">
        <div className="msgContent mx-4 relative standarStyle -outline-offset-4 flex flex-col bg-slate-100 p-4 rounded-md text-center font-semibold">
          <div className="cancel absolute top-2 right-4 text-slate-600">
            <i className="fa-solid fa-cancel text-slate-600"></i>
          </div>
          <h1 className="text-3xl p-4 mb-4 text-indigo-600 font-bold">Cajon</h1>
          <h3 className="mb-2">Thanks For Choosing Our Humble Resturant</h3>
          <span className="text-gray-600">We Hopefuly You Like Our Meals</span>
          <button
            onClick={complatedOrder}
            className="p-2 mt-4 bg-indigo-600 rounded-md text-slate-100"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;

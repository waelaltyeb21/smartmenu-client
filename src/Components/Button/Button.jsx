import { useNavigate } from "react-router-dom";

const Button = ({ GoTo, text, icon }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (GoTo != "") {
      navigate(GoTo, { replace: true });
    }
  };
  return (
    <div className="confirmOrders w-full p-4 flex items-center justify-center fixed bottom-0 left-0">
      <button
        onClick={handleClick}
        className="bg-indigo-600 text-slate-100 font-bold text-xl px-8 py-2 rounded-md"
      >
        <span>{text}</span>
        <i className={`fa-solid fa-${icon} mx-2`}></i>
      </button>
    </div>
  );
};

export default Button;

import { useContext } from "react";
import { useNavigate } from "react-router";
import { LangSwitcher } from "../../Context/SwitcherApi";

const BackButton = ({ toPage }) => {
  const [lang] = useContext(LangSwitcher);
  const navigate = useNavigate();
  const GoBack = () => {
    navigate(toPage);
  };
  return (
    <button
      onClick={GoBack}
      className="standarStyle px-2 py-0.5 rounded"
    >
      {
        lang == "en" ? "Back" : "العودة"
      }
    </button>
  );
};

export default BackButton;

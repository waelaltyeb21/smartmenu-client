import { useContext } from "react";
import DishCard from "../DishCard/DishCard";
import { LangSwitcher } from "../../Context/SwitcherApi";
import Button from "../Button/Button";

const DishList = ({ dishes }) => {
  console.log(dishes);
  const [lang] = useContext(LangSwitcher);
  const text = lang == "en" ? "Show Cart List" : "عرض الطلبات";
  return (
    <div className="DishList relative px-2 grid grid-cols-1 gap-2">
      {dishes.map((dish) => (
        <DishCard
          dish={dish}
          key={dish._id}
          lang={lang}
          text={lang == "en" ? "Add" : "اضافة"}
        />
      ))}
      <Button GoTo={"/cart"} text={text} icon={"print"} />
    </div>
  );
};

export default DishList;

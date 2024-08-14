import { useParams } from "react-router";
import DishList from "../Components/DishList/DishList";
import BackButton from "../Components/BackButton/BackButton";
import useFetch from "../Hooks/useFetch";
import { useContext } from "react";
import { LangSwitcher } from "../Context/SwitcherApi";
import Loading from "../Components/Loading/Loading";

const Dishes = () => {
  const { id } = useParams();
  const [lang] = useContext(LangSwitcher);
  const URL = import.meta.env.VITE_REACT_SERVER_HOST_URL;
  const { data, isLoading, error } = useFetch(`${URL}dishes/category/${id}`);
  if (isLoading) return <Loading />;
  if (error) return <h3>Error !</h3>;
  if (data.dishes.length == 0) return <h3>No Data Found</h3>;
  const category = lang == "en" ? data.category.name_en : data.category.name_ar;
  return (
    <div className="Dishes">
      <div className="heading flex justify-between items-center mb-8 px-2">
        <h1 className="text-2xl font-bold">{category}</h1>
        <BackButton toPage={-1} />
      </div>
      <DishList dishes={data.dishes} />
    </div>
  );
};

export default Dishes;

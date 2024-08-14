import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { useContext } from "react";
import { LangSwitcher } from "../../Context/SwitcherApi";
import Loading from "../Loading/Loading";

const Cates = () => {
  const [lang] = useContext(LangSwitcher); // Detect Language
  const URL = import.meta.env.VITE_REACT_SERVER_HOST_URL; // BackEnd API
  const { data: categories, isLoading, error } = useFetch(`${URL}categories`); // Fetch Categories
  if (isLoading) return <Loading />;
  if (error) return <h3>Error !</h3>;
  if (categories.length == 0) return <h3>No Data Found</h3>; // Check If There Is No Catefories
  const IMAGE_URL = import.meta.env.VITE_REACT_IMAGE_URL; // URL To Get Image From Server
  return (
    <div className="CatesContainer my-8 mx-2">
      <div className="heading bg-slate-400 p-8 mb-4 text-center rounded-lg">
        <h1 className="text-2xl text-slate-900 font-semibold">
          {lang == "en" ? "Categories" : "الاصناف"}
        </h1>
      </div>
      <div className="cates grid grid-cols-1 gap-2 justify-center">
        {categories.map((cate, idx) => (
          <Link
            to={`/dishes/${cate.name_en}`}
            className="bg-sky-800 min-h-20 py-2 flex flex-col justify-center items-center rounded-xl font-semibold"
            key={idx}
          >
            <div className="imgContainer">
              <img
                className="w-28"
                src={`${IMAGE_URL + cate.image}`}
                alt="image"
              />
            </div>
            <span className="text-slate-100">
              {lang == "en" ? cate.name_en : cate.name_ar}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cates;

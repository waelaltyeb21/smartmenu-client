import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const Cates = () => {
  const URL = import.meta.env.VITE_REACT_SERVER_HOST_URL;
  const { data: categories, isLoading, error } = useFetch(`${URL}categories`);
  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Error !</h3>;
  console.log(categories);
  const IMAGE_URL = import.meta.env.VITE_REACT_IMAGE_URL;
  return (
    <div className="CatesContainer my-8 mx-2">
      <div className="heading bg-slate-400 p-8 mb-4 text-center rounded-lg">
        <h1 className="text-2xl text-slate-900 font-semibold">Categories</h1>
      </div>
      <div className="cates grid grid-cols-1 gap-2 justify-center">
        {categories.map((cate, idx) => (
          <Link
            to={`/dishes/${cate.name_en}`}
            className="bg-sky-800 min-h-32 flex flex-col justify-center items-center rounded-xl font-semibold"
            key={idx}
          >
            <div className="imgContainer">
              <img
                className="w-28"
                src={`${IMAGE_URL + cate.image}`}
                alt="image"
              />
            </div>
            <span className="text-slate-100">{cate.name_en}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cates;

import { useContext, useRef, useState } from "react";
import img from "../../assets/Food/sidral-mundet-RtmXZvKEOgQ-unsplash.jpg";
import { LangSwitcher } from "../../Context/SwitcherApi";

const Categories = () => {
  const [lang] = useContext(LangSwitcher);
  const [cates] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const slider = useRef();
  const scrollLeft = () => {
    slider.current.scrollLeft = slider.current.scrollLeft + 140;
  }
  const scrollRight = () => {
    slider.current.scrollLeft = slider.current.scrollLeft - 140;
  }
  return (
    <div className="Categories">
      <div className="btns flex justify-between items-center mb-4">
        <button className="flex justify-center items-center text-gray-700 rounded-full mx-4" onClick={lang == 'ar' ? scrollLeft : scrollRight}>
        <i className={`fa-solid fa-angle-${lang == 'ar' ? 'right' : 'left'}`}></i>
        </button>
        <h1 className="font-bold text-2xl">{lang == "ar" ? "الاقسام" : "Categories"}</h1>
        <button className="flex justify-center items-center text-gray-700 rounded-full mx-4" onClick={lang == 'ar' ? scrollRight : scrollLeft}>
        <i className={`fa-solid fa-angle-${lang == 'ar' ? 'left' : 'right'}`}></i>
        </button>
      </div>
      <div 
      ref={slider}
      className="slider flex overflow-x-auto scroll-smooth scroll-my-4 whitespace-nowrap py-4 *:mx-3">
        {cates.map((cate) => (
          <div className="slide" key={cate}>
            <div
              className="imgContainer w-[70px] h-[70px] overflow-hidden rounded-full outline-dashed outline-purple-600 outline-3 outline-offset-4 hover:*:scale-110"
              key={cate}
            >
              <img
                className="w-full h-full object-cover transition-all duration-300 ease-in-out"
                src={img}
                loading="lazy"
                alt="image"
              />
            </div>
            <span className="block text-center font-semibold mt-2 text-2xl">
              0{cate}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

import { useContext } from "react";
import { LangSwitcher } from "../../Context/SwitcherApi";
import { Link } from "react-router-dom";

const NavBar = () => {
  // Language Detector
  const [lang, languageSwitcher] = useContext(LangSwitcher);
  return (
    <header className="NavBar py-4 px-2 mb-4 border-b-4">
      <nav className="flex justify-between items-center">
        <div className="lang bg-green-400 text-white px-1 py-0.5 rounded-lg cursor-pointer">
          <button onClick={languageSwitcher}>
            {lang == "en" ? "AR" : "EN"}
          </button>
        </div>
        <Link to="/" className="logo font-bold text-2xl">
          Logo
        </Link>
        <Link to="/cart" className="cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;

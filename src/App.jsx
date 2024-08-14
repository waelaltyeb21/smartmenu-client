import "./App.css";
// Hooks
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
// Pages
const Home = lazy(() => import("./Pages/Home"));
const Dishes = lazy(() => import("./Pages/Dishes"));
const Cart = lazy(() => import("./Pages/Cart"));
const Invoice = lazy(() => import("./Pages/Invoice"));
const NoPage = lazy(() => import("./Pages/NoPage"));
// Components
import NavBar from "./Components/NavBar/NavBar";
import Loading from "./Components/Loading/Loading";
// Lazy Loading && Susbend

function App() {
  // Prevent Right Click
  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <div className="app *:px-2 relative select-none">
        <h1 className="text-red-600 text-center lg:block hidden">
          Sorry This Menu Doesn't Work On Labtops Neither PC's
        </h1>
        {/* Otherwise */}
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dishes/:id" element={<Dishes />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
        <Toaster />
      </div>
    </Suspense>
  );
}

export default App;

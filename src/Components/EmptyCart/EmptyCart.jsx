import { Link } from "react-router-dom";

const EmptyCart = () => {
  // Message If There Is No Orders On Cart
  return (
    <div className="EmptyCart text-center m-4 p-8 bg-slate-300 rounded-md outline-dashed outline-2 mt-16">
      <h1 className="text-2xl">There Is No Orders On Cart</h1>
      <Link className="block w-fit mx-auto mt-4 px-4 py-0.5 bg-indigo-600 text-slate-100 rounded-md" to="/">Go To Orders Page</Link>
    </div>
  );
};

export default EmptyCart;

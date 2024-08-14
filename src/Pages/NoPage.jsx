import { useContext } from "react";
import { Link } from "react-router-dom";
import { LangSwitcher } from "../Context/SwitcherApi";

const NoPage = () => {
  const [lang] = useContext(LangSwitcher); // Detect Language
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-5xl">
          {lang == "en" ? "Page not found" : "تعذر العثور على هذه الصفحة"}
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-slate-100">
          {lang == "en"
            ? "Sorry, we couldn’t find the page you’re looking for."
            : "عذرا هذه الصفحة غير موجودة"}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-slate-100 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {lang == "en" ? "Go back home" : "العودة الى الصفحة الرئيسية"}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NoPage;

import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    let header = document.getElementsByTagName("header")[0];
    let sticky = header.offsetTop;
    function headerCheck() {
      if (window.scrollY > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
    window.onscroll = function () {
      headerCheck();
    };
  });

  return (
    <header className="md:flex-col flex flex-col justify-evenly items-center pb-8 w-2/3 mx-auto my-4 rounded-lg font-bold text-4xl bg-slate-600">
      <h1 className="my-4 text-5xl p-6 text-white text-center">My Blog</h1>
      <div className="md:flex-row flex flex-col justify-end gap-6">
        <Link
          to="/"
          className="header-links self-center bg-violet-500 rounded-md px-8 py-6 text-neutral-100 underline"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="header-links self-center bg-violet-500 rounded-md px-8 py-6 text-neutral-100 underline"
        >
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;

import React, { } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiMenu } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";


import logo from "../../assets/images/logo.png";



const Header = () => {


  const totalQuantity = useSelector((state) => state.cart.totalQuantity);




  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white "
              to="/home"
            >
              <img className=" h-20 object-cover  " src={logo} />
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none  block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <HiMenu />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link to="/shoes"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white  "

                >
                  <span className="ml-2">کفش ها</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white  "

                >
                  <span className="ml-2">  سبد خرید</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white  "

                >
                  <span className="ml-2"> ورود</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white  "

                >
                  <span className="ml-2">ارتباط با ما</span>
                </Link>
              </li>
            </ul>
            <div className="flex" >
              <Link to="/cart" >
                <span className="flex-initial"  >
                  <FiShoppingCart className="text-xl text-white " />
                  <span className="bg-yellow-500 text-black rounded-full px-1 ">{totalQuantity}</span>
                </span>
              </Link>
              
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

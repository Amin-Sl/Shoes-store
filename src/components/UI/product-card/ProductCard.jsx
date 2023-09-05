import React from "react";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { HiShoppingCart } from "react-icons/hi"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  const notify = () => toast.success(' به سبد خرید اضافه شد!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });;

  return (

    <div className="w-full p-2 rounded-lg shadow-xl lg:max-w-lg h-max bg-black ">
      
    <Link to={`/shoes/${id}`} >

      <div className="flex justify-center " >
        <img
          className=" h-40 w-32 "
          src={image01}
        />
      </div>
      <div className="" >

        <div className="text-white"> <span>{title}</span> 
        </div>

        <div className="flex justify-between text-yellow-500">
          <p> {price},000  تومان </p>
          <div onClick={notify} >
            <button onClick={addToCart} className="shop-btn">
              <HiShoppingCart className="text-yellow-500" />
            </button>
          </div>

        </div>
      </div>
      </Link>
      <ToastContainer />
    </div>

  );
};

export default ProductCard;

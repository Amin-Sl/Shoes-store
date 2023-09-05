import React from "react";

import "../styles/cart-page.css";

import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

import { BsFillTrashFill } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";

import { ToastContainer, toast } from 'react-toastify';


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);



  return (


    <section className="" >
      {cartItems.length === 0 ? (
        <h5 className="text-center">سبد خرید شما خالی است.</h5>
      ) : (

        <div className="cart-shop mx-2 bg-black" >

          {cartItems.map((item) => (
            <Tr item={item} key={item.id} />
          ))}
        </div>
      )}

      <div className="flex justify-center">
        <h6>
          <span className="flex flex-initial">  هزینه کل : {totalAmount}</span>
        </h6>
        <div className="flex flex-initial">
          <button className="me-4 underline text-yellow-500">
            <Link to="/shoes">ادامه خرید</Link>
          </button>
          <button className=" flex flex-initial ">
            <Link to="/checkout">پرداخت</Link>
          </button>
        </div>
      </div>

    </section>


  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const notify = () => toast.error('از سبد خرید حذف شد', {
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
    <div class="  container mx-auto px-2 py-2">
      <div class="mt-2">
        <div class="flex flex-col md:flex-row border-b border-gray-400 py-2">
          <div class="flex-shrink-0">
            <img src={image01} alt="Product image" class=" bg-white w-32 h-32 px-2 py-2" />
          </div>
          <div class="mt-4 md:mt-0 md:ml-6 mr-3">
            <h2 class="text-lg text-gray-200 font-bold">{title}</h2>
            {/* <p class="mt-2 text-gray-200">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت .</p> */}
            <div class="mt-4 flex items-center">
              <span class="mr-2 text-gray-200">تعداد</span>
              <div class="flex items-center">
                <button class="shop-btn text-red-500" onClick={decreaseItem} ><AiFillCaretDown /> </button>
                <span class="mx-2 text-gray-200">{quantity}</span>
                <button class="shop-btn  text-green-500 " onClick={incrementItem}  ><AiFillCaretUp /></button>
              </div>
            </div>
            <div>
              <span class="ml-auto font-bold text-yellow-500 "> قیمت : {price},000 تومان</span>
            </div>
            <div onClick={notify} className="flex justify-center" >
              <button className="shop-btn text-red-600 " onClick={deleteItem} > <BsFillTrashFill /> </button>
            </div>
          </div>

        </div>
      </div>
      <ToastContainer />

    </div>
  );
};

export default Cart;

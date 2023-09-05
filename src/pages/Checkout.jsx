import React, { useState } from "react";
import { useSelector } from "react-redux";






const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  return (


    <section className=" px-2 mx-2 py-2 " >

      <h6 className="mb-4">آدرس </h6>
      <form className="" onSubmit={submitHandler}>
        <div className="py-2 mx-2">
          <input
            type="text"
            placeholder="نام خود را وارد کنید"
            required
            onChange={(e) => setEnterName(e.target.value)}
            className="px-2 w-80 flex justify-center "
          />
        </div>

        <div className="py-2 mx-2">
          <input
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            required
            onChange={(e) => setEnterEmail(e.target.value)}
            className="px-2 w-80"
          />
        </div>
        <div className="py-2 mx-2">
          <input
            type="number"
            placeholder="شماره تلفن"
            required
            onChange={(e) => setEnterNumber(e.target.value)}
            className="px-2 w-80"
          />
        </div>
        <div className="py-2 mx-2">
          <input
            type="text"
            placeholder="استان"
            required
            onChange={(e) => setEnterCountry(e.target.value)}
            className="px-2 w-80"
          />
        </div>
        <div className="py-2 mx-2">
          <input
            type="text"
            placeholder="شهر"
            required
            onChange={(e) => setEnterCity(e.target.value)}
            className="px-2 w-80"
          />
        </div>
        <div className="py-2 mx-2">
          <input
            type="number"
            placeholder="کد پستی"
            required
            onChange={(e) => setPostalCode(e.target.value)}
            className="px-2 w-80"
          />
        </div>
        <button type="submit" className="">
          پرداخت
        </button>
      </form>



      <div className="checkout__bill">
        <h6 className="d-flex align-items-center justify-content-between mb-3">
          هزینه سفارش: <span> {cartTotalAmount} تومان </span>
        </h6>
        <h6 className="d-flex align-items-center justify-content-between mb-3">
          هزینه ارسال: <span> رایگان</span>
        </h6>
        <div className="checkout__total">
          <h5 className="d-flex align-items-center justify-content-between">
            قیمت کل: <span> {totalAmount} تومان</span>
          </h5>
        </div>
      </div>

    </section>

  );
};

export default Checkout;

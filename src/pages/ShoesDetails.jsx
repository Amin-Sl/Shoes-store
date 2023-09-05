import React, { useState, useEffect } from "react";
import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { Container, Row, Col } from "reactstrap";

import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";

import ProductCard from "../components/UI/product-card/ProductCard";

const ShoesDetails = () => {
  

  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, image01 } = product;

  const relatedProduct = products.filter((item) => category === item.category);

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const notify = () => toast.success('به سبد خرید اضافه شد !', {
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

    <div>
      <section>
        <div class="py-8">
          <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row -mx-4">
              <div class="md:flex-1 px-4">
                <div className="pb-3  ">
                  <Zoom>
                    <img src={previewImg} alt="" className="w-75 h-72" />
                  </Zoom>
                </div>

                <div className="flex justify-center pl-5 pb-5 ">
                  <div
                    className=""
                    onClick={() => setPreviewImg(product.image01)}
                  >

                    <img src={product.image01} alt="" className="w-20" />

                  </div>
                  <div
                    className=""
                    onClick={() => setPreviewImg(product.image02)}
                  >
                    <img src={product.image02} alt="" className="w-20" />
                  </div>

                  <div
                    className=""
                    onClick={() => setPreviewImg(product.image03)}
                  >
                    <img src={product.image03} alt="" className="w-20" />
                  </div>
                </div>
              </div>

              <div class="md:flex-1 px-4">
                <h2 class=" text-black text-2xl font-bold mb-2">{title}</h2>
                <div class="flex mb-4">
                  <div class="mr-4">
                    <span class="font-bold text-gray-700">قیمت : </span>
                    <span class="text-gray-600">{price},000 تومان</span>
                  </div>

                </div>
                <div class="mb-4">
                  <span class="font-bold text-gray-700">رنگ</span>
                  <div class="flex items-center mt-2">
                    <button class="w-6 h-6 rounded-full bg-gray-800 mr-2"></button>
                    <button class="w-6 h-6 rounded-full bg-red-500 mr-2"></button>
                    <button class="w-6 h-6 rounded-full bg-blue-500 mr-2"></button>
                    <button class="w-6 h-6 rounded-full bg-yellow-500 mr-2"></button>
                  </div>
                </div>
                <div class="mb-4">
                  <span class="font-bold text-gray-700">سایز</span>
                  <div class="flex items-center mt-2">
                    <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">38</button>
                    <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">39</button>
                    <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">40</button>
                    <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">41</button>
                    <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">42</button>
                  </div>
                </div>
                <div>
                  <span class="font-bold text-gray-700">توضیحات  </span>
                  <p class="text-gray-600 text-sm mt-2">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                    و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                    روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
                    و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
                    و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،
                    تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
                  </p>
                </div>
                <div onClick={notify} >
                  <button onClick={addItem} className="inline-block rounded border-2 border-yellow-500 bg-black  px-6 pb-[6px] pt-2 text-xs font-normal uppercase leading-normal text-yellow-500 transition duration-150 ease-in-out ">
                    افزودن به سبد
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
        <ToastContainer />
      </section>

      <section>
        <section>
          <Container>
            <h1>کالا های مرتبط</h1>
            <Row>
              {relatedProduct.map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                  <ProductCard item={item} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </section>
    </div>
  );
};

export default ShoesDetails;

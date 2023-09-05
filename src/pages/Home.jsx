import React, { useState, useEffect } from "react";
import products from "../assets/fake-data/products.js";
import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import Hero from "../components/UI/hero/Hero.js";





const Home = () => {

  const limit = 9;

  const [allProducts, setAllProducts] = useState(products);
  const [adidas, setAdidas] = useState([]);
  const [leathermen, setLeathermen] = useState([]);
  const [leatherwomen, setLeatherwomen] = useState([]);


  useEffect(() => {
    const filteredAdidas = products.filter((item) => item.category === "adidas");
    const slice = filteredAdidas.slice(0, 4);
    setAdidas(slice);
  }, []);

  useEffect(() => {
    const filteredLeathermen = products.filter((item) => item.category === "leathermen");
    const slice = filteredLeathermen.slice(0, 4);
    setLeathermen(slice);
  }, []);

  useEffect(() => {
    const filteredLeatherwomen = products.filter((item) => item.category === "leatherwomen");
    const slice = filteredLeatherwomen.slice(0, 4);
    setLeatherwomen(slice);
  }, []);






  return (
    <div>

      <section>
        <Hero />
      </section>

      <section className="" >
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6" >
          {allProducts.slice(0, limit).map((item) => (
            <div key={item.id} >
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </section >

      <section className="pt-0">
        <h2 className="flex justify-center" > آدیداس</h2>
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-6" >
          {adidas.map((item) => (
            <div key={item.id} >
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </section>

      <section className="pt-0">
        <h2 className="flex justify-center" > چرم مردانه</h2>
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-6" >
          {leathermen.map((item) => (
            <div key={item.id} >
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </section>

      <section className="pt-0">

        <h2 className="flex justify-center" > چرم زنانه</h2>

        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-6" >

          {leatherwomen.map((item) => (
            <div key={item.id} >
              <ProductCard item={item} />
            </div>

          ))}

        </div>
      </section>

    </div >
  );
};

export default Home;

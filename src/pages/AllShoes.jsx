import React, { useState, useEffect } from "react";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";


import { SiFila } from "react-icons/si";
import { SiPuma } from "react-icons/si";
import { SiAdidas } from "react-icons/si";
import { SiNike } from "react-icons/si";

import "../styles/pagination.css";


const AllShoes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const allProduct = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "NIKE") {
      const filteredProducts = products.filter(
        (item) => item.category === "nike"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "FILA") {
      const filteredProducts = products.filter(
        (item) => item.category === "fila"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PUMA") {
      const filteredProducts = products.filter(
        (item) => item.category === "puma"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "ADIDAS") {
      const filteredProducts = products.filter(
        (item) => item.category === "adidas"
      );


      setAllProducts(filteredProducts);
    }
  }, [category]);


  return (
    <section className="" >
      <div className="d-flex" >
        <div className=" w-16 ">
          <ul className="text-2xl w-20 px-2 mr-2 mt-10 border-1  border-l-yellow-500 ">
            <li className="py-2" >  <button
              className={`  ${category === "ALL" ? "" : ""} `} onClick={() => setCategory("ALL")} >
              همه
            </button></li>
            <li className="py-2" > <button
              className={` ${category === "NIKE" ? "" : ""} `} onClick={() => setCategory("NIKE")}
            >
              <SiNike />
            </button>
            </li>
            <li className="py-2" >   <button
              className={` ${category === "PUMA" ? "" : ""} `} onClick={() => setCategory("PUMA")}
            >
              <SiPuma />
            </button></li>
            <li className="py-2" >   <button
              className={` ${category === "ADIDAS" ? "" : ""} `} onClick={() => setCategory("ADIDAS")}
            >
              <SiAdidas />
            </button></li>
            <li className="py-2" ><button
              className={` ${category === "FILA" ? "" : ""} `} onClick={() => setCategory("FILA")}
            >
              <SiFila />
            </button></li>

          </ul>







        </div>
        <div className="  w-100 p-5 mr-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6" >
          {allProducts.map((item) => (
            <div className="" key={item.id} >
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default AllShoes;

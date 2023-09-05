import React from "react";
import Header from "../Header/Header.jsx";
import Routes from "../../routes/Routers";
import Footer from "../Footer/Footer.js";

const Layout = () => {

  return (
    <div>
      <Header />
      <div>
        <Routes />
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;

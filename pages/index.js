import React from "react";

import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Product></Product>
      <Footer></Footer>
    </div>
  );
}

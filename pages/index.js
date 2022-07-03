import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header/Header";
import Login from "./components/Login/Login";
import Product from "./components/Product/Product";
import Register from "./components/Register/Register";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Product></Product>
      <Register></Register>
      <Login></Login>
      <Footer></Footer>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header/Header";
import Product from "./components/Product/Product";

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

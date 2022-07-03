import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/Header/Header/Header";
import Product from "./components/Header/Product/Product";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Product></Product>
    </div>
  );
}

import { useRouter } from "next/router";
import React from "react";
import data from "../../public/data";

const Cart = () => {
  const router = useRouter();
  const id = router.query.id;
  // const product = data.find((a) => a.id === id);
  // if (!product) {
  //   return <div>No Product Found</div>;
  // }
  return <div>{Cart}</div>;
};

export default Cart;

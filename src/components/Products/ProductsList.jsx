import React from "react";
import ProductsItem from "./ProductsItem";

export default function ProductsList({products}) {
const getQuantity = () => {
return products.reduce((acc, product) => {
    return acc + Number(product.quantity);
  }, 0);
}

const getTotalPrice = () => {
  return products.reduce((acc, product) => {
    return acc + (product.price*product.quantity);
  }, 0);

}

  return (
    <>
    <ul>
      {products.map((item) => (
        <ProductsItem 
        key={item.id}
        name={item.name}
        quantity={item.quantity}
        price={item.price}
         />
      ))}
    </ul>
   <ul>
    <li>Total quantity:{getQuantity()}</li>
    <li>Total price:{getTotalPrice()}</li>
   </ul>
    </>
  );
}

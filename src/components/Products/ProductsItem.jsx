import React from "react";

export default function ProductsItem({ name, quantity, price }) {
  return (
    <li>
      <p>Name:{name}</p>
      <p>Quantity:{quantity}</p>
      <p>Price:{price}</p>
    </li>
  );
}

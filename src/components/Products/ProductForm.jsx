import { nanoid } from "nanoid";
import React, { Component } from "react";
import { useState } from "react";

const ProductForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const stateObj = {
    name: setName,
    quantity: setQuantity,
    price: setPrice,
  };

  const handleChange = (event) => {
    stateObj[event.target.name](event.target.value);
  };

  const handleAddProduct = (event) => {
    event.preventDefault();
    const newProduct = {
      name,
      quantity,
      price,
      id: nanoid(),
    };
    onSubmit(newProduct);
    setName("");
    setQuantity("");
    setPrice("");
  };

  return (
    <form onSubmit={handleAddProduct}>
      <label htmlFor="">
        <span>Name</span>
        <input
          type="text"
          name="name"
          required
          onChange={handleChange}
          value={name}
        />
      </label>
      <label htmlFor="">
        <span>Quantity</span>
        <input
          type="number"
          name="quantity"
          required
          onChange={handleChange}
          value={quantity}
        />
      </label>
      <label htmlFor="">
        <span>Price</span>
        <input
          type="number"
          name="price"
          required
          onChange={handleChange}
          value={price}
        />
      </label>
      <button style={{}} type="submit">
        Push me
      </button>
    </form>
  );
};

export default ProductForm;

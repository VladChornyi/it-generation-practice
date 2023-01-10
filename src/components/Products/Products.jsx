import { Component } from "react";
import PropTypes from "prop-types";
import ProductForm from "./ProductForm";
import ProductsList from "./ProductsList";
import { useState } from "react";
import Goback from "../Goback/Goback";

const Products = () => {
  const [products, setProducts] = useState([]);

  const onSubmit = (newProduct) => {
    setProducts((prevState) => {
      if (
        prevState.some((product) => {
          return product.name === newProduct.name;
        })
      ) {
        return prevState.map((product) => {
          if (product.name === newProduct.name) {
            product.quantity =
              Number(product.quantity) + Number(newProduct.quantity);
            product.price = newProduct.price;
            return product;
          }
          return product;
        });
      }

      return { products: [...prevState, newProduct] };
    });
  };

  return (
    <div>
      <ProductForm onSubmit={onSubmit} />
      <ProductsList products={products} />
      <Goback />
    </div>
  );
};

export default Products;

import { Component } from "react";
import PropTypes from "prop-types";
import ProductForm from "./ProductForm";
import ProductsList from "./ProductsList";

export default class Products extends Component {
  state = {
    products: [],
  };

  onSubmit = (newProduct) => {
    this.setState((prevState) => {
      if (
        prevState.products.some((product) => {
          return product.name === newProduct.name;
        })
      ) {
        return prevState.products.map((product) => {
          if (product.name === newProduct.name) {
            console.log(product, newProduct);
            product.quantity =
              Number(product.quantity) + Number(newProduct.quantity);
            product.price = newProduct.price;
            return product;
          }
          return product;
        });
      }

      return { products: [...prevState.products, newProduct] };
    });
  };

  render() {
    return (
      <div>
        <ProductForm onSubmit={this.onSubmit} />
        <ProductsList products={this.state.products} />
      </div>
    );
  }
}

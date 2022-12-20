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
      return { products: [...prevState.products, newProduct] };
    });
  };

  render() {
    return (
      <div>
        <ProductForm onSubmit={this.onSubmit}/>
        <ProductsList products={this.state.products}/>
       
      </div>
    );
  }
}

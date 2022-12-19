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
        <ProductsList />
        <ul>{this.state.products.map(item=>(<li key={item.name}>{item.name}</li>))}</ul>
      </div>
    );
  }
}

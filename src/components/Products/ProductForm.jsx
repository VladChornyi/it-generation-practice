import { nanoid } from "nanoid";
import React, { Component } from "react";

export default class ProductForm extends Component {
  state = {
    name: "",
    quantity: "",
    price: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddProduct = (e) => {
    const { name, quantity, price} = this.state;
    e.preventDefault();
    const newProduct = {
      name,
      quantity,
      price,
      id: nanoid(),

    }
    this.props.onSubmit(newProduct);
  }

  render() {
    const { name, quantity, price } = this.state;
    return (
      <form onSubmit={this.handleAddProduct}>
        <label htmlFor="">
          <span>Name</span>
          <input
            type="text"
            name="name"
            required
            onChange={this.handleChange}
            value={name}
          />
        </label>
        <label htmlFor="">
          <span>Quantity</span>
          <input
            type="number"
            name="quantity"
            required
            onChange={this.handleChange}
            value={quantity}
          />
        </label>
        <label htmlFor="">
          <span>Price</span>
          <input
            type="number"
            name="price"
            required
            onChange={this.handleChange}
            value={price}
          />
        </label>
        <button style={{}} type="submit">
          Push me
        </button>
      </form>
    );
  }
}

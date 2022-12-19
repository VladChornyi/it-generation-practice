import PropTypes from "prop-types";
import ProductForm from "./ProductForm";
import ProductsList from "./ProductsList";

export default function Products() {
  return (
    <div>
      <ProductForm />
      <ProductsList />
    </div>
  );
}

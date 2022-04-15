import React from "react";
import "./AddProduct.scss";
import ProductForm from "./ProductsForm/ProductForm";
import SaveProducts from "./SaveProducts/SaveProduct";

const AddProducts = () => {
  return (
    <div className="m-auto add_products">
      <div className="d-flex flex-column">
        <div className="d-flex align-items-center wx__backbutton">
          <span className="material-icons-round">arrow_back</span>
          Add Product
        </div>
        <form className="d-flex">
          <div className="form">
            <ProductForm />
          </div>
          <SaveProducts />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;

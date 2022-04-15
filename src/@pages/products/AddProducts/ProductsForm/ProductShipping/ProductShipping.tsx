import React from "react";
import "./ProductShipping.scss";

const ProductShipping = () => {
  return (
    <div className="product_shipping">
      <div className="d-flex flex-column">
        <p className="_h6__semibold m-0">Shipping Option</p>
        <div className="shipping d-flex justify-content-between">
          <div className="weight">
            <label htmlFor="">
              weight <span>*</span>
            </label>
            <div className="wx__input_group_secondary">
              <input className="wx__input_secondary" type="text" />
              <span className="">kg</span>
            </div>
          </div>
          <div className="width">
            <label htmlFor="">width</label>
            <div className="wx__input_group_secondary">
              <input className="wx__input_secondary" type="text" />
              <span className="">Inch</span>
            </div>
          </div>
          <div className="height">
            <label htmlFor="">height</label>
            <div className="wx__input_group_secondary">
              <input className="wx__input_secondary" type="text" />
              <span className="">Inch</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShipping;

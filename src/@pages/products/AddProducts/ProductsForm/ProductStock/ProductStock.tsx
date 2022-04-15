import React from "react";
import "./ProductStock.scss";

const ProductStock = () => {
  return (
    <div className="product_stock">
      <div className="d-flex flex-column">
        <p className="_h6__semibold m-0">Stock</p>
        <div className="stock d-flex align-items-center">
          <div className="stock_input">
            <div className="wx__input_group_secondary">
              <span className="material-icons-round">all_inclusive</span>
              <input className="wx__input_primary" type="text" />
            </div>
          </div>
          <div className="stock_switch">
            <div className="form-check form-switch w-100 d-flex justify-content-between">
              <div className="form-wrapper">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStock;

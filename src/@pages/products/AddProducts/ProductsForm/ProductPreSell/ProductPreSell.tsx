import React from "react";
import "./ProductPreSell.scss";

const ProductPreSell = () => {
  return (
    <div className="product_pre_sell">
      <div className="d-flex flex-column">
        <p className="_h6__semibold m-0">Pre-Sell</p>
        <div className="pre_sell">
          <div className="form-check form-switch pre_sell_switch w-100 d-flex justify-content-between">
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Do you want to enable presell?
            </label>
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
  );
};

export default ProductPreSell;

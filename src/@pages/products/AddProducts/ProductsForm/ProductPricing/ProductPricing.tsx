import React from "react";
import "./ProductPricing.scss";

const ProductPricing = () => {
  return (
    <div className="product_pricing">
      <div className="d-flex flex-column">
        <p className="_h6__semibold m-0">Pricing</p>
        <div className="price d-flex justify-content-between">
          <div className="selling_price">
            <label htmlFor="">
              Selling Price <span>*</span>
            </label>
            <input type="text" className="wx__input_secondary" />
          </div>
          <div className="regular_price">
            <label htmlFor="">Regular Price</label>
            <input type="text" className="wx__input_secondary" />
          </div>
          <div className="cost_price">
            <label htmlFor="">Cost Price</label>
            <input type="text" className="wx__input_secondary" />
          </div>
        </div>
        <div className="sku_n_barcode d-flex">
          <div className="product_sku">
            <label htmlFor="">Product SKU</label>
            <input type="text" className="wx__input_secondary" />
          </div>
          <div className="barcode">
            <label htmlFor="">Barcode</label>
            <input type="text" className="wx__input_secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPricing;

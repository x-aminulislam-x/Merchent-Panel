import React from "react";
import "./ProductInfo.scss";

const ProductInfo = () => {
  return (
    <div className="wx__product_info">
      {/* wrapper div */}
      <div>
        {/* product name start */}
        <div className="d-flex flex-column wx__product_name">
          <label htmlFor="">
            Product Name <span>*</span>
          </label>
          <input className="wx__input_secondary" type="text" />
          <div className="wx__product_sugest">
            <span className="wx__product_sugest_link">
              salamstore.webx.xyz/product/
            </span>
            <span className="wx__product_sugest_edit">
              product name will appear here{" "}
              <span className="material-icons-round">edit</span>
            </span>
          </div>
        </div>
        {/* product name end */}

        {/* product details start */}
        <div className="wx__product_details">
          <label htmlFor="">
            Product Details <span>*</span>
          </label>
          <textarea name="" id=""></textarea>
        </div>
        {/* product details end */}

        {/* product summary start */}
        <div className="wx__product_summary">
          <label htmlFor="">Product Summary</label>
          <textarea name="" id=""></textarea>
        </div>
        {/* product summary end */}
      </div>
    </div>
  );
};

export default ProductInfo;

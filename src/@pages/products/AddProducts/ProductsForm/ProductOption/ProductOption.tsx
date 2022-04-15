import React from "react";
import "./ProductOption.scss";

const ProductOption = () => {
  return (
    <div className="product_option">
      <div className="d-flex flex-column">
        <div className="option_header">
          <p className="_h6__semibold m-0">Option</p>
          <span className="material-icons-round">help</span>
        </div>
        <div className="option_body">
          <div className="option_switch">
            <div className="form-check form-switch  w-100 d-flex justify-content-between">
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                This Product has options, like size or color etc.
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
          <div className="option_details">
            <div className="option_details_terms">
              <label htmlFor="">Option Name</label>
              <div className="option_details_input d-flex justify-content-between align-items-center">
                <span className="material-icons-round">drag_indicator</span>
                <div className="input">
                  <input type="text" className="wx__input_secondary" />
                </div>
                <span className="material-icons-round">delete_outline</span>
              </div>
            </div>
            <div className="option_details_terms">
              <label htmlFor="">Option Values</label>
              <div className="option_details_input d-flex justify-content-between  align-items-center">
                <span className="material-icons-round">drag_indicator</span>
                <div className="input">
                  <input type="text" className="wx__input_secondary" />
                </div>
                <span className="material-icons-round">delete_outline</span>
              </div>
            </div>
            <button className="btn__large__secondary">Done</button>
          </div>
          <p className="add_another_option">
            <span className="material-icons-round">add</span>Add another option
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductOption;

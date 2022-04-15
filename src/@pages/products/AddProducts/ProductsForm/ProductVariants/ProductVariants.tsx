import React from "react";
import "./ProductVariants.scss";

const ProductVariants = () => {
  return (
    <div className="product_variants">
      <div className="d-flex flex-column">
        <div className="variants_header">
          <p className="_h6__semibold m-0">variants</p>
          <span className="material-icons-round">help</span>
        </div>
        <div className="variants_body">
          <table>
            <tr>
              <th>Variant</th>
              <th>Quantity</th>
              <th>Selling Price</th>
              <th>Regular Price</th>
            </tr>
            <tr>
              <td>Small / Red</td>
              <td>50</td>
              <td>1240</td>
              <td>1240</td>
            </tr>
            <tr>
              <td>Small / Red</td>
              <td>50</td>
              <td>1240</td>
              <td>1240</td>
            </tr>
            <tr>
              <td>Small / Red</td>
              <td>50</td>
              <td>1240</td>
              <td>1240</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductVariants;

import { useNavigate } from "react-router-dom";
import TableComponent from "./ProductTable";

const Products = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="_h4__medium mb-0">Products List</h4>
        <button
          className="btn__primary mx-4"
          onClick={() => navigate("/admin/products/addProduct")}
        >
          Add Product
        </button>
      </div>
      <div className="card mt-3">
        <TableComponent />
      </div>
    </div>
  );
};

export default Products;

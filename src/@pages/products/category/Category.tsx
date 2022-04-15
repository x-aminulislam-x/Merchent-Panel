import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Products = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    
  }

  return (
    <div className="container">
      <div className="d-flex align-items-center">
        <span
          className="material-icons-outlined"
          role="button"
          onClick={() => navigate(-1)}
        >
          arrow_back
        </span>
        <h4 className="_h4__medium mb-0 mx-3">Add Category</h4>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mt-4">
          <div className="col-md-9">
            <div className="card p-4">
              <div className="wx__form_input">
                <label>Category name</label>
                <input
                  className="wx__input_secondary"
                  type="text"
                  {...register("category_name")}
                />
              </div>
              <div className="wx__form_input">
                <label>Slug</label>
                <input
                  className="wx__input_secondary"
                  type="text"
                  {...register("slug")}
                />
              </div>
              <div className="wx__form_input">
                <label>Parent Category</label>
                <select
                  className="form-select"
                  {...register("parent_category")}
                >
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="wx__form_input">
                <label>Product Details</label>
                <textarea
                  name=""
                  className="wx__textarea w-100"
                  rows={10}
                  {...register("product_details")}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-4">
              <button className="btn__primary">Create Category</button>
              <hr />
              <div className="form-check form-switch d-flex justify-content-between p-0">
                <label className="form-check-label" htmlFor="category">
                  Category is not active
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="category"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Products;

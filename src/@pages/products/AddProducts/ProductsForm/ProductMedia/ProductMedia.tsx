import React from "react";
import "./ProductMedia.scss";

const ProdictMedia = () => {
  return (
    <div className="wx__product_media">
      {/* wrapper div */}
      <div>
        <p className="media_text _h6__semibold">Media</p>
        <div className="file-area d-flex align-items-center justify-content-center">
          <label className="file-dummy" htmlFor="images">
            <div className="success">
              Great, your files are selected. Keep on.
            </div>
            <div className="default d-flex align-items-center justify-content-center">
              <span className="material-icons-round img_icon">image</span>
              <div className="upload_info d-flex flex-column ">
                <p>
                  Drag and Drop images here or{" "}
                  <span>Browse on your computer</span>
                </p>
                <span>Recomended size:1000px X 1000px</span>
              </div>
            </div>
          </label>
          <input
            type="file"
            name="images"
            id="images"
            required={true}
            multiple={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ProdictMedia;

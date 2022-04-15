import React from "react";
import "./ProductForm.scss";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductMedia from "./ProductMedia/ProductMedia";
import ProductOption from "./ProductOption/ProductOption";
import ProductPreSell from "./ProductPreSell/ProductPreSell";
import ProductPricing from "./ProductPricing/ProductPricing";
import ProductShipping from "./ProductShipping/ProductShipping";
import ProductStock from "./ProductStock/ProductStock";
import ProductVariants from "./ProductVariants/ProductVariants";

const ProductForm = () => {
  return (
    <>
      <ProductInfo />
      <ProductMedia />
      <ProductPricing />
      <ProductShipping />
      <ProductPreSell />
      <ProductStock />
      <ProductOption />
      <ProductVariants />
    </>
  );
};

export default ProductForm;

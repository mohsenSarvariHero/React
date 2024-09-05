import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { Breadcrum } from "../components/Breadcrum/Breadcrum";
import { ProductDisplay } from "../components/ProductDisplay/ProductDisplay";
import { DescriptionBox } from "../components/DescriptionBox/DescriptionBox";
import { RelatedProduct } from "../components/RelatedProduct/RelatedProduct";

export const Product = () => {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  const productF = products.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={productF} />
      <ProductDisplay product={productF} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};

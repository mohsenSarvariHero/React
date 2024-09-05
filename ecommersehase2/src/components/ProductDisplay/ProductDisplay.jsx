import React, { useContext } from "react";
import arrow from "../assets/images/arrow-icon.png";
import "./ProductDisplay.css";
import { ShopContext } from "../../context/ShopContext";

export const ProductDisplay = (props) => {
  const { addToCart } = useContext(ShopContext);
  const { product } = props;

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.productImage} />
          <img src={product.productImage} />
          <img src={product.productImage} />
          <img src={product.productImage} />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.productImage} />
        </div>
      </div>
      <div className="productdisplay-rigth">
        <h1>{product.productName}</h1>
        <div className="productdisplay-right-star">
          <img src={arrow} width="20px" />
          <img src={arrow} width="20px" />
          <img src={arrow} width="20px" />
          <img src={arrow} width="20px" />
          <img src={arrow} width="20px" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>

        <div className="productdisplay-right-description">
          12454sdfdfdfv545f44b bdfdsv4 dvdv
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size-option">
            <p>S</p>
            <p>M</p>
            <p>XL</p>
            <p>XXL</p>
          </div>
        </div>

        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
      

        <p className="productdisplay-right-category">
          <span>Category :</span> Women, T-Shirt Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern Latest
        </p>
      </div>
    </div>
  );
};

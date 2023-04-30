import React, { useState, useContext } from "react";
import { productebi } from "./Data";
import "./Content.css";
import Main from "./Main";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

export default function Content() {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <Main>
      <ImageSlider slides={SliderData} />
      <h1 className="cusfav">Custumers Favourite Foods</h1>
      <div className="prod">
        {productebi
          .filter((product) => product.id < 5)
          .map((product, idx) => {
            return (
              <div className="product" key={idx}>
                <h3 className="name">{product.Name}</h3>
                <img
                  style={{ width: "500px", height: "400px" }}
                  src={product.img}
                  alt="photos"
                />
                <h4 className="price">Price - {product.price}$</h4>
                <div>
                  {product.id === 1 && (
                    <Link to="/khinkali">
                      <button className="but1">More Info</button>
                    </Link>
                  )}
                  {product.id === 2 && (
                    <Link to="/acharulixachapuri">
                      <button className="but1">More Info</button>
                    </Link>
                  )}
                  {product.id === 3 && (
                    <Link to="/kupati">
                      <button className="but1">More Info</button>
                    </Link>
                  )}
                  {product.id === 4 && (
                    <Link to="/imerulixachapuri">
                      <button className="but1">More Info</button>
                    </Link>
                  )}
                  <button
                    className="but2"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </Main>
  );
}

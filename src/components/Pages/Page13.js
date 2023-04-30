import React, { useContext } from "react";
import Header from "../Header";
import { CartContext } from "../CartContext";
import { productebi } from "../Data";

export default function Page1() {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <div>
      <Header />
      <div className="prod">
        {productebi
          .filter((product) => product.id === 13)
          .map((product, idx) => {
            return (
              <div className="product" key={idx}>
                <h3 className="name">{product.Name}</h3>
                <img
                  style={{ width: "500px", height: "400px" }}
                  src={product.img}
                  alt="photos"
                />
                <p style={{ textAlign: "center" }}>{product.description}</p>
                <h4 className="price">Price - {product.price}$</h4>
                <div>
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
    </div>
  );
}
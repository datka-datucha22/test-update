import React, { useContext } from "react";
import Header from "./Header";
import { CartContext } from "./CartContext";
import "./Content.css";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <Header />
      <div style={{ textAlign: "center" }}>
        <h1>Cart</h1>
      </div>
      <div>
        {cartItems.length === 0 ? (
          <p style={{ textAlign: "center" }}>No items in the cart</p>
        ) : (
          <div className="cartprod">
            {cartItems.map((item, idx) => (
              <div className="cartproduct" key={idx}>
                <h3 className="name">{item.Name}</h3>
                <img
                  style={{ width: "250px", height: "175px" }}
                  src={item.img}
                  alt="product"
                />
                <h4 className="price">Price - {item.price}$</h4>
                <div
                  style={{
                    display: "flex",
                    padding: "10px",
                    alignItems: "center",
                  }}
                  className="quantity"
                >
                  <button
                    className="dec"
                    onClick={() => decreaseQuantity(item)}
                  >
                    -
                  </button>
                  <p className="quant">{item.quantity}</p>
                  <button
                    className="inc"
                    onClick={() => increaseQuantity(item)}
                  >
                    +
                  </button>
                </div>
                <button className="remove" onClick={() => removeFromCart(item)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        <div style={{ textAlign: "center" }}>
          <h3>Total Price: {getTotalPrice()}$</h3>
          <button className="clearcart" onClick={() => clearCart()}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}

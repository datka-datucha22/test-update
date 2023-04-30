import React, { useState, useContext } from "react";
import Header from "./Header";
import { productebi } from "./Data";
import "./Content.css";
import Footer from "./Footer";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

export default function Menu() {
  const [filteredProducts, setFilteredProducts] = useState(productebi);
  const { addToCart } = useContext(CartContext);

  const filterProducts = (category) => {
    const filtered = productebi.filter(
      (product) => product.category === category
    );
    setFilteredProducts(filtered);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <Header />
      <div style={{ textAlign: "center" }}>
        <h1>Products</h1>
        <button
          className="filterbuttons"
          onClick={() => filterProducts("Food")}
        >
          Food
        </button>
        <button
          className="filterbuttons"
          onClick={() => filterProducts("Dessert")}
        >
          Dessert
        </button>
        <button
          className="filterbuttons"
          onClick={() => filterProducts("Alcohol")}
        >
          Alcohol
        </button>
        <button
          className="filterbuttons"
          onClick={() => filterProducts("Juice")}
        >
          Juice
        </button>
      </div>
      <div className="prod">
        {filteredProducts.map((product, idx) => (
          <div className="product" key={idx}>
            <h3 className="name">{product.Name}</h3>
            <img
              style={{ width: "400px", height: "300px" }}
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
              {product.id === 5 && (
                <Link to="/yavispancake">
                  <button className="but1">More Info</button>
                </Link>
              )}
              {product.id === 6 && (
                <Link to="/gozinayi">
                  <button className="but1">More Info</button>
                </Link>
              )}
              {product.id === 7 && (
                <Link to="/ekleri">
                  <button className="but1">More Info</button>
                </Link>
              )}
              {product.id === 8 && (
                <Link to="/shu">
                  <button className="but1">More Info</button>
                </Link>
              )}
              {product.id === 9 && (
                <Link to="/jackdaniels">
                  <button className="but1">More Info</button>
                </Link>
              )}
              {product.id === 10 && (
                <Link to="/jimbeam">
                  <button className="but1">More Info</button>
                </Link>
              )}
              {product.id === 11 && (
                <Link to="/jagermeister">
                  <button className="but1">More Info</button>
                </Link>
              )}
              {product.id === 12 && (
                <Link to="/capitanmorgan">
                  <button className="but1">More Info</button>
                </Link>
              )}
              {product.id === 13 && (
                <Link to="/cherryjuice">
                  <button className="but1">More Info</button>
                </Link>
              )}
              {product.id === 14 && (
                <Link to="/orangejuice">
                  <button className="but1">More Info</button>
                </Link>
              )}
              {product.id === 15 && (
                <Link to="/pomegranatejuice">
                  <button className="but1">More Info</button>
                </Link>
              )}
              {product.id === 16 && (
                <Link to="/applejuice">
                  <button className="but1">More Info</button>
                </Link>
              )}
              <button className="but2" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>{" "}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

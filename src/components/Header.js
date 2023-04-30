import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <img
            style={{ width: "50px" }}
            src="https://img.freepik.com/free-vector/funny-banana-character-illustrated-logo_23-2148721720.jpg"
            alt="img"
          ></img>
        </li>
        <li className="linkebi">
          <Link to="/">Home</Link>
        </li>
        <li className="linkebi">
          <Link to="/aboutus">About Us</Link>
        </li>
        <li className="linkebi">
          <Link to="/contacts">Contact</Link>
        </li>
        <li className="linkebi">
          <Link to="/menu">Menu</Link>
        </li>

        <li>
          <Link to="/cart">
            <img
              className="cartplace"
              style={{
                width: "30px",
              }}
              src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
              alt="IMG"
            ></img>
          </Link>
        </li>
      </ul>
    </div>
  );
}

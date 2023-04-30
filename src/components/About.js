import React from "react";
import Header from "./Header";

export default function About() {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        width: "100%",
        textAlign: "center",
      }}
    >
      <Header />
      <h1
        style={{
          paddingTop: "250px",
          paddingBottom: "224px",
        }}
      >
        We are an online store of Georgian dishes.
        <br /> We offer delicious dishes prepared by our Georgian chef.
        <br /> Thank you for using our website.
      </h1>
      <div
        style={{
          backgroundColor: "black",
          width: "1536px",
          height: "80px",
        }}
      >
        <p style={{ color: "white", textAlign: "center", paddingTop: "35px" }}>
          Created by Giorgi. © 2023
        </p>
      </div>
    </div>
  );
}

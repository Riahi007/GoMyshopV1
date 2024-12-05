import React from "react";
import { Link } from "react-router-dom";

function Box({ prod }) {
  return (
    <div
      style={{
        padding: "10px",
        border: "2px solid gray",
        boxShadow: "2px 2px 2px rgba(11, 85, 138, 0.397)",
        width: "300px",
        height: "400px",
        borderRadius: "5px",
        margin: "auto",
        transition: "all 0.1s ease",
        borderRadius: "15px",
      }}
    >
      <img
        src={prod.image}
        alt=""
        style={{ width: "200px", height: "200px" }}
      />
      <p style={{ margin: "10px 0", fontWeight: "bold" }}>
        {prod.title.slice(0, 10)}...
      </p>
      <p style={{ margin: "5px 0", color: "gray" }}>{prod.category}</p>
      <p style={{ margin: "5px 0", color: "green" }}>{prod.price} TND</p>
      <p style={{ margin: "5px 0", color: "blue" }}>{prod.sold}</p>
      <button
        style={{
          width: "150px",
          height: "40px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "gray",
          color: "white",
        }}
      >
        <Link to={`/singleProduct/${prod.id}`}   style={{ textDecoration: "none", color: "white" }}>Show More</Link>
      </button>
    </div>
  );
}

export default Box;

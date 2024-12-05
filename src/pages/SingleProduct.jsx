import React from "react";
import { useParams } from "react-router-dom";

function SingleProduct({ products, addToCart }) {
  const { item } = useParams();
  const singleProduct = products.find((prod) => prod.id == item);

  const handleAddToCart = () => {
    addToCart(singleProduct);
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <p>{singleProduct.title}</p>
      <img src={singleProduct.image} alt={singleProduct.title} />
      <h4>{singleProduct.description}</h4>
      <h2 style={{ color: "#e74c3c" }}>{singleProduct.price} TND</h2>

      <button
        onClick={handleAddToCart}
        style={{
          backgroundColor: "#3498db",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default SingleProduct;

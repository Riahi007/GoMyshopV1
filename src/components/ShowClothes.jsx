import React, { useState } from "react";
import products from "../products";
import Box from "./Box";

function ShowClothes() {
  const [product, setProducts] = useState(products);
  const bestseller = product.sort((a, b) => b.sold - a.sold).slice(0, 5);
  const topRated = product
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 5);
  console.log(product);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "55px", fontWeight: "bold" }}>Best Seller</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {bestseller.map((prod) => (
          <Box prod={prod} />
        ))}
      </div>

      <h1 style={{ fontSize: "55px", fontWeight: "bold" }}>Top Rated</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {topRated.map((prod) => (
          <Box prod={prod} />
        ))}
      </div>
    </div>
  );
}

export default ShowClothes;

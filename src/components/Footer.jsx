import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "10px",
        textAlign: "center",
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px",
      }}
    >
      <p>&copy; 2023 GoMyShop. All rights reserved.</p>
      <p>
        <a href="/about" style={{ color: "white", textDecoration: "none" }}>
          About
        </a>{" "}
        |
        <a href="/contact" style={{ color: "white", textDecoration: "none" }}>
          {" "}
          Contact
        </a>
      </p>
    </footer>
  );
}

export default Footer;

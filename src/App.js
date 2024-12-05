import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Marque from "./components/Marquee";
import SingleProduct from "./pages/SingleProduct";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import products from "./products";

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id? { ...item, quantity: item.quantity + 1 }: item );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + amount, 1) }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <Marque />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/singleProduct/:item"
          element={<SingleProduct products={products} addToCart={addToCart} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

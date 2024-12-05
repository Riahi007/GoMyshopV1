import React from "react";

function Cart({ cart, updateQuantity, removeFromCart }) {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const formattedTotalPrice = totalPrice.toFixed(3);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((product) => (
              <div key={product.id} className="cart-item">
                <div className="cart-item-details">
                  <img src={product.image} alt={product.title} className="cart-item-img" />
                  <div className="cart-item-info">
                    <p>{product.title}</p>
                    <p>Price: {product.price} TND</p>
                    <div className="quantity-controls">
                      <button className="btn-add" onClick={() => updateQuantity(product.id, 1)}>+</button>
                      <span>{product.quantity}</span>
                      <button className="btn-dec" onClick={() => updateQuantity(product.id, -1)}>-</button>
                    
                    <button className="btn-delete" onClick={() => removeFromCart(product.id)}>Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ul>
          <h3>Total Price: {formattedTotalPrice} TND</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;

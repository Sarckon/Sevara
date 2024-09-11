import React from 'react';
import { useCart } from './CartContext';
import { useTheme } from './ThemeContext';
import { Link } from 'react-router-dom';
import "./icomoon/style.css";

const Cart = () => {
  const { theme } = useTheme();
  const { cart, removeFromCart, getTotalQuantity, incrementQuantity, decrementQuantity, getTotalPrice } = useCart();

  return (
    <div className='cart' id={theme}>
      {cart.length === 0 ? (
        <p className='cart_counter'>Your cart is empty</p>
      ) : (
        <>
          <div className='cart_header'>
            <h2 className='cart_counter' style={{ color: theme === "light" ? "#555758" : "#bdbebf" }}>{getTotalQuantity()} ТОВАРОВ В КОРЗИНЕ</h2>
            <p className='cart_totalPrice'style={{ backgroundColor: theme === "light" ? "#edeeee" : "#333333" }}>Total Price  <h3> ${getTotalPrice().toFixed(2)}</h3></p>
            <button className='cart_button_Order'>Order</button>
          </div>
          {cart.map((item) => (
            <div key={item.id} className='cart_separate-div'>
              <Link to={`/products/${item.id}`}>
                <img className='img1' src={item.images[0]} />
              </Link>
              <div className='cart_description'>
                <h3>{item.title}</h3>
                <p>Category: {item.category.name}</p>
              </div>
              <p className='cart_price'>Price <br /> <h3>{item.price * item.quantity} $</h3></p>

              {item.quantity > 0 && (
                <div className=' cart_quantity'>
                  <button onClick={() => decrementQuantity(item.id)} >-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
              )}

              <span
                className="icon-cancel-circle"
                onClick={() => removeFromCart(item.id)}
              ></span>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Cart;
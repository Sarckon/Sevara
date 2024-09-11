import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import "./icomoon/style.css";
import '../components/icomoon-v1.0/style.css';
import { useCart } from './CartContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { getTotalQuantity } = useCart();

  return (
    <div className='header' id={theme} style={{ backgroundColor: theme === "light" ? "#f0f0f0" : "#333" }}>
      <span class="icon-spell-check" ></span> <h2 className='title'>Showcase</h2>
      <nav> 
        <Link style={{ color: theme === "light" ? "#000" : "#f0f0f0" }} className='aboutUs_page' to="/about">About us</Link>
        <Link style={{ color: theme === "light" ? "#000" : "#f0f0f0" }} className='home_page' to="/">Home</Link>
        <Link style={{ color: theme === "light" ? "#000" : "#f0f0f0" }} className='categories_page' to="/categories">Categories</Link>
        <Link style={{ color: theme === "light" ? "#000" : "#f0f0f0" }} className='cart_page' to="/cart">Cart  <span className='counter'>{getTotalQuantity()}</span></Link>
      </nav>

      <button className='signUp_button'>Sign in</button>

      <button id={theme} style={{ backgroundColor: theme === "light" ? " rgb(215, 212, 212)" : "black" }} onClick={toggleTheme} className="theme-toggle-button">
        {theme === 'light' ? (
          <i className="icon-weather-night"></i>
        ) : (
          <i className="icon-weather-sunny"></i>
        )}
      </button>

    </div>
  );
};

export default Header;
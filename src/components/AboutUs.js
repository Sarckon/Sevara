import React from 'react';
import { useTheme } from './ThemeContext';
import "./icomoon/style.css"

const AboutUs = () => {
  const { theme } = useTheme();

  return (
    <div className='div_aboutUs' id={theme}>

      <div className='div_images'>
        <div className='img1'><img src='https://i.imgur.com/cHddUCu.jpeg,https://i.imgur.com/CFOjAgK.jpeg,https://i.imgur.com/wbIMMme.jpeg' /></div>
        <div className='img2'><img src='https://emirs-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FQphac99.jpeg&w=1080&q=75' /></div>
        <div className='img3'><img src='https://emirs-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FNWIJKUj.jpeg&w=1080&q=75' /></div>
      </div>

      <div className='div' id={theme} style={{ color: theme === "light" ? "#606163" : "#c3c4c6" }}>
        <div>
          <span class="icon-truck"></span>
          <h4>Free Shipping</h4>
          <p>For all orders above $1000</p>
        </div>
        <div>
          <span class="icon-clipboard"></span>
          <h4>Secure Payments</h4>
          <p>All transactions are secured and encrypted</p>
        </div>
        <div>
          <span class="icon-user-check"></span>
          <h4>Customer Care</h4>
          <p>Get support 24/7 via phone or chat</p>
        </div>
        <div>
          <span class="icon-price-tag"></span>
          <h4>Best Prices</h4>
          <p>We offer the best prices for our products</p>
        </div>
      </div>
      <div className='details'>
        <h2>A Glimpse into the Backend:</h2>
        <p>While my expertise primarily lies in frontend development, I've integrated Node.js on the backend to ensure a robust and efficient server-side infrastructure. This combination allows for smooth communication between the frontend and the server, ensuring a seamless user experience.</p>
        <img src='https://i0.wp.com/www.setblue.com/wp-content/uploads/2022/02/node.png?fit=768%2C768&ssl=1' />
        <h2>Let's Connect</h2>
        <p>Explore the website, discover the offerings, and if you have any questions or suggestions, I'm here to listen. Your journey through this online shopping experience is as important to me as it is to you. Happy exploring!</p>
        <span class="icon-linkedin"></span>
        <span class="icon-github"></span>
        <span class="icon-youtube2"></span>
      </div>

    </div>


  );
};

export default AboutUs;
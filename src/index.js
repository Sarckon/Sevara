import ReactDOM from "react-dom/client";
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "./components/ThemeContext";
import Header from "./components/Header";
import Home from "./components/Home";
import SeparatePage from "./components/SeparatePage";
import Categories from "./components/Categories";
import AboutUs from "./components/AboutUs";
import { CartProvider } from "./components/CartContext";
import NoPage from "./components/NoPage";
import "./index.css";
import Footer from "./components/Footer";
import Cart from './components/Cart';

import CategoryDetail from "./components/CategoryDetail";

const Layout = () => (
  <div>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<SeparatePage />} />

        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:categoryName" element={<CategoryDetail />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

const App = () => (
  <BrowserRouter>
    <ThemeProvider>
      <CartProvider>
        <Layout />
      </CartProvider>
    </ThemeProvider>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
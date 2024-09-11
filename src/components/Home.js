import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import { useCart } from './CartContext';
import "./icomoon/style.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState('');
  const [priceRange, setPriceRange] = useState(1000000); 

  const minRange = 1;
  const maxRange = 100000000;

  const { addToCart } = useCart();

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products")
      .then(response => {
        setProducts(response.data);
        setFilter(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setFilter(
      products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase()) &&
        product.price <= priceRange
      )
    );
  }, [search, products, priceRange]);

  const handleRangeChange = (e) => {
    setPriceRange(Number(e.target.value));
  };

  if (loading) {
    return <div className='loading' id={theme}>Loading...</div>;
  }

  return (
    <>
      <div id={theme} className='div_search'>
        <input
          className='input_search'
          style={{ backgroundColor: theme === 'light' ? '#f0f0f0' : '#424242' }}
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className='range-container'>
          <input
            className='range'
            type='range'
            min={minRange}
            max={maxRange}
            value={priceRange}
            onChange={handleRangeChange}
          />

          <p className='range_p'>Max Price: {priceRange} $</p>
        </div>
      </div>

      <div className="wrapperAllPage" id={theme}>
        {filter.length === 0 ? (
          <h2>No products found</h2>
        ) : (
          filter.map(product => (
            <div className="separateDiv" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.images} alt={product.title} />
              </Link>
              <div className='content'>
                <h3 className='p_title'>{product.title}</h3>
                <p>Category: {product.category.name}</p>
                <p className='p_description'>{product.description}</p>
                <button onClick={() => addToCart(product)}>
                  <span className="icon-cart"></span> Add to cart
                </button>
                <p className='price'>price <br /> {product.price} $</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;

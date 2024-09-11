import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductCategories = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then(response => {
        setProducts(response.data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false)
      })
  }, []);


  useEffect(() => {
    const categoryGroups = products.reduce((acc, product) => {
      const categoryName = product.category.name;

      if (!acc[categoryName]) {
        acc[categoryName] = [];
      }
      acc[categoryName].push(product);
      return acc;
    }, {});
    setCategories(categoryGroups);
  })

  
  if (loading) {
    return (<p>Loading...</p>)
  }

  return (
    <div>
      <h1>Product Categories</h1>
      {Object.keys(categories).map(category => (
        <h2>
          <Link key={category} to={`/category/${category}`}>{category}</Link>
        </h2>
      ))}
    </div>
  );
};

export default ProductCategories;

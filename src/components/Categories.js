import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const Categories = () => {
  const { theme } = useTheme();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);


  useEffect(() => {
    const categoryGroups = products.reduce((acc, product) => {
      const categoryName = product.category.name;
      const categoryImage = product.category.image;

      if (!acc[categoryName]) {
        acc[categoryName] = {
          image: categoryImage,
          products: [],
        };
      }
      acc[categoryName].products.push(product);
      return acc;
    }, {});
    setCategories(categoryGroups);
  }, [products]);



  if (loading) {
    return (<p id={theme} className='loading'>Loading...</p>);
  }

  return (
    <div className='categories' id={theme}>
      {Object.keys(categories).map(category => (
        <Link key={category} to={`/category/${category}`}>
          <img src={categories[category].image} className='category_image' />
          <h1 className='name_categories'>{category}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import { useCart } from './CartContext';

const CategoryDetail = () => {
    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState([]);
    const { theme } = useTheme();
    const { addToCart } = useCart();


    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products')
            .then(response => {
                setProducts(response.data);
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setLoading(false)
            })
    }, [categoryName]);



    useEffect(() => {
        setFilter(
            products.filter(product =>
                product.category.name === categoryName)
        )
    })



    if (loading) {
        return (<p className='loading' id={theme}>Loading...</p>)
    }

    return (
        <>
            <div id={theme} className='categories_header'>
                <h1 style={{ color: theme === "light" ? "#555758" : "#bdbebf" }} >{categoryName} </h1>
                <Link to="/categories"> <button className='categories_BACK_button'><span class="icon-undo2"></span> Back</button></Link>
            </div>

            <div className="category_products_div" id={theme}>
                {filter.map(product => (
                    <div className="separateDiv">
                        <Link to={`/products/${product.id}`}>
                            <img src={product.images} />
                        </Link>
                        <div className='content'>
                            <h3 className='p_title'>{product.title}</h3>
                            <p>Category: {product.category.name}</p>
                            <p className='p_description'>{product.description}</p>
                            <button onClick={() => addToCart(product)}><span className="icon-cart"></span> Add to cart</button>
                            <p className='price'>price <br /> {product.price} $</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CategoryDetail;
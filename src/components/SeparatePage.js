import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import { Link } from 'react-router-dom';
import "./icomoon/style.css"
import { useCart } from './CartContext';

const SeparatePage = () => {
    const { theme } = useTheme(true);
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const{addToCart} = useCart();

    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then(response => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className='loading' id={theme}>Loading...</div>
    if (error) return <div className='error' id={theme}>Error: {error}</div>;

    return (
        <div className='wrapper' id={theme}>
            <div className='separatePage'>
                <Link to="/"> <button className='button_home'><span class="icon-undo2"></span> Back</button></Link>
                <h1 className='title'>{product.title}</h1>
                <img className='img1' src={product.images[0]} />
                <img className='img2' src={product.images[1]} />
                <img className='img3' src={product.images[2]} />
                <img className='img0' src={product.images[0]} />
                <h3 style={{ backgroundColor: theme === "light" ? "rgb(228 228 231)" : "#999999" }} className='category'>{product.category.name}</h3>
                <p className='description'>{product.description}</p>
                <p className='price'>Price </p>
                <button className='button_add' onClick={() => addToCart(product)}><span className="icon-cart"></span> Add to cart</button>
                <p className='costs'> {product.price} $</p>
            </div>
        </div>
    );
};

export default SeparatePage;
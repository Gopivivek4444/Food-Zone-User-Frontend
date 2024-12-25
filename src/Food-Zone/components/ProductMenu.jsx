import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_URL } from '../api';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar.jsx'

const ProductMenu = () => {
    const [products, setProducts] =useState([])
    const {firmId, firmName} = useParams();
    const productHandler = async() =>{
        try {
            const response = await axios.get(`${API_URL}/product/${firmId}/products`);
            setProducts(response.data.products)
            console.log(response.data.products)
        } catch (error) {
            alert("Failed to fetch Products");
            console.error("Failed to fetch Products", error);
        }
    }

    useEffect(() =>{
        productHandler();
    },[]);

    const addToCart = (product) => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = [...savedCart, product];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

  return (
    <>
    <Navbar />
    <div className='productSection'>
        <h3 id='firmName'>{firmName}</h3>
        {products.map((product) =>(
            <div key={product._id} className='productDetails'>
                <div className="aboutProduct">
                <div id='productName'>{product.productName}</div>
                <div>{product.description}</div>
                <div>{product.price}</div>
                
                </div>
                
                <div className="productImage">
                    <img src={`${API_URL}/uploads/${product.image}`} alt={product.productName} />
                    <Link to={`/cart`}>
                    <div className="productButton" onClick={() => addToCart(product)}>ADD</div>
                    </Link>
                </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default ProductMenu
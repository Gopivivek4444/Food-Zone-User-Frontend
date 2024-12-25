import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import { API_URL } from '../api.js';
const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(savedCart);
    }, []);

    const handleRemove = (productId) => {
        const updatedCart = cartItems.filter(item => item._id !== productId);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <>
            <Navbar />
            <div className='cartSection'>
                <h3>Your Cart</h3>
                {cartItems.length === 0 ? (
                    <p>Cart is empty</p>
                ) : (
                    cartItems.map((item) => (
                        <div key={item._id} className='cartItem'>
                            <img src={`${API_URL}/uploads/${item.image}`} alt={item.productName} className='cartImage' />
                            <div className='cartDetails'>
                                <div>{item.productName}</div>
                                <div>{item.price}</div>
                            </div>
                            <button id='removeBtn' onClick={() => handleRemove(item._id)}>Remove</button>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default Cart;

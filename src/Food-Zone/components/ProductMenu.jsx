import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_URL } from '../api';
import { useParams } from 'react-router-dom';

const ProductMenu = () => {
    const [products, setProducts] =useState([])
    const {firmId} = useParams();
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
    },[])
  return (
    <div className='productSection'>
        {/* <h3>This is firm ID {firmId}</h3> */}
        {products.map((product) =>(
            <div key={product._id}>
                {product.productName}
                <img src={`${API_URL}/uploads/${product.image}`} alt={product.productName} />
            </div>
        ))}
    </div>
  )
}

export default ProductMenu
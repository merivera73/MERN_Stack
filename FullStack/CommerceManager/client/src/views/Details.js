import React, { useEffect, useState } from 'react';
import {Link, navigate, Router} from '@reach/router';
import axios from 'axios';

const Product = ({ id }) => {
    const [product, setProduct] = useState(null)
    useEffect(()=> {
        axios.get('http://localhost:5500/api/product/' + id)
            .then(response => setProduct(response.data))
            .catch(console.log)
    }, [])
    if(product === null) {
        return 'loading ...'
    }
    console.log(product);
    return(
        <div>
            <p>Product Name: {product.name}</p>
            <p>Qty: {product.qty}</p>
            <p>Price: {product.price}</p>

            <button>Edit</button>
        </div>
    )
}

export default Product;
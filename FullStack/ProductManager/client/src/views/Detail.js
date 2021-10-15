import React, { useEffect, useState} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';

export default props => {
    const [product, setProduct] = useState({})    
    useEffect(() => {
        axios.get('http://localhost:5500/api/product/' + props.id)
            .then(res => setProduct(res.data))
    }, [])
    console.log(product);
    return(
        <div>
            <p>Product Title: {product.productName}</p>
            <p>Product Price: {product.productPrice}</p>
            <p>Product Description: {product.productDescription}</p>
            <Link to={"/product/" + product._id + "/edit"}> Edit</Link>
        </div>
    )
}
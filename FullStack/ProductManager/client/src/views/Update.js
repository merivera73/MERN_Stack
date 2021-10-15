import React, { useEffect, useState } from 'react';

import axios from 'axios';
export default props => {
    const {id} = props;
    const [productName, setProductName] = useState();
    const [productPrice, setProductPrice] = useState();
    const [productDescription, setProductDescription] = useState();
    useEffect(() => {
        axios.get('http://localhost:5500/api/product/' + id)
            .then(res=> {
                setProductName(res.data.productName);
                setProductPrice(res.data.productPrice);
                setProductDescription(res.data.productDescription);
            })
    }, [])
    const updateProduct = event => {
        axios.put('http://localhost:5500/api/product/' + id, {
            productName,
            productPrice,
            productDescription
        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update Product: </h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Product Title:</label>
                    <input type='text' name='productName' value={productName} onChange={(event) => {setProductName(event.target.value) }}/>
                </p>
                <p>
                    <label>Product Price:</label>
                    <input type='number' name='productPrice' value={productPrice} onChange={(event) => {setProductPrice(event.target.value) }}/>
                </p>
                <p>
                    <label>Product Decription:</label>
                    <input type='text' name='productDescription' value={productDescription} onChange={(event) => {setProductDescription(event.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
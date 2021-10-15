import React, { useEffect, useState } from 'react';
import express from 'express';
import axios from 'axios';
import { navigate } from '@reach/router';

const EditProduct = ({ id }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5500/api/products/' + id + '/edit')
            .then(response => setProduct(response.data))
    }, []);

    function onChangeHandler (event) {
        const {name, value} = event.target;

        setProduct ({
            ...product,
            [name]: value,
        });
    }

    const onSubmitHandler = event => {
        event.preventDefault();

        axios.put('http://localhost:5500/api/products/' + id, product)
            .then(() => navigate('/products'))
            .catch(console.log);
        
    }

    if(product === null) {
        return 'Loading...';
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Product Name: </label>
                <input type='text' name='name' value={product.name} onChange={onChangeHandler} />
            </p>
            <p>
                <label>Qty: </label>
                <input type='number' name='qty' value={product.qty} onChange={onChangeHandler} />
            </p>
            <p>
                <label>Price: </label>
                <input type='number' name='price' value={product.price} onChange={onChangeHandler} />
            </p>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default EditProduct;
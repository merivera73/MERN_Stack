import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

export default props => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5500/api/products')
            .then(res=> setProducts(res.data));
    }, [])
    const {removeFromDom} = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:5500/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return (
        <div>
            <div>
            <h1>Product List</h1> <button>Add New Product</button><br />
            </div>
            
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product, id)=>(
                    <tr key={id}><td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>{product.qty}</td><td>{product.price}</td>
                    <td><button onClick={(event) => {deleteProduct(product._id)}}>Delete</button>&nbsp;
                    <button onClick={() => navigate('/products/' + product._id + '/edit')}>Edit</button></td>
                    </tr>
                ))
                </tbody>
            </table>
            
        </div>
    )
}
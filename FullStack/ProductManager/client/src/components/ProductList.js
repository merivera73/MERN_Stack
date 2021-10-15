import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
export default props => {
    const {removeFromDom} = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:5500/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return (
        <div>
            {props.products.map((product, index)=>{
                return <p key={index}><Link to={"/product/"+product._id}>{product.productName}</Link> <br /> {product.productPrice} <br /> {product.productDescription}<br />
                <button onClick={(event) => {deleteProduct(product._id)}}>Delete</button></p>
            })}
        </div>
    )
}
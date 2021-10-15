import React, { useState } from 'react';
import axios from 'axios';
export default props => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setproductDescription] = useState('');

    const onSubmitHandler = event => {
        event.preventDefault();

        axios.post('http://localhost:5500/api/newProduct', {
            productName,
            productPrice,
            productDescription
        })

            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Product Title:</label><br />
                <input type='text' onChange = {event=>setProductName(event.target.value)}/>
            </p>
            <p>
                <label>Product Price:</label><br />
                <input type='number' onChange = {event=>setProductPrice(event.target.value)}/>
            </p>
            <p>
                <label>Product Description:</label><br />
                <input type='text' onChange = {event=>setproductDescription(event.target.value)}/>
            </p>
            <input type='submit'/>
        </form>
    )
}
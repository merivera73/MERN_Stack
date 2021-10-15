import React, { useState } from 'react';
import axios from 'axios';
export default props => {
    const [name, setName] = useState('');
    const [qty, setQty] = useState('');
    const [price, setPrice] = useState('');

    const onSubmitHandler = event => {
        event.preventDefault();

        axios.post('http://localhost:5500/api/products/new', {
            name,
            qty,
            price
        })

            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Product Name: </label>
                <input type='text' onChange = {event=>setName(event.target.value)}/>
            </p>
            <p>
                <label>Qty: </label>
                <input type='number' onChange = {event=>setQty(event.target.value)}/>
            </p>
            <p>
                <label>Price: </label>
                <input type='number' onChange = {event=>setPrice(event.target.value)}/>
            </p>
            <button type='submit'>Submit</button>
        </form>
    )
}
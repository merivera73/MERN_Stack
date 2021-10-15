import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const NewRestaurant = () => {
    const [formState, setFormState] = useState({
        name: '',
        cuisine: '',
        submitted: false
    })

    function onChangeHandler(event) {
        const {name, value} = event.target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(formState);
        formState.name.length < 3 || formState.cuisine.length < 10 ? 
        setFormState({
            ...formState,
            submitted: false
        }) : setFormState({
            ...formState,
            submitted: true
        })

        axios.post('http://localhost:5500/api/restaurants', formState)
            .then(() => navigate('/restaurants'))
            .catch(console.log);
    }

    let message = '';
    if(formState.name.length < 3){
        message = "The Restaurant's Name must be at least 3 characters!"
    }

    let message2 = '';
    if(formState.cuisine.length < 10){
        message2 = "The Restaurant's Cuisine must be longer!"
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input name='name' value={formState.name} onChange={onChangeHandler} />
                <p>{message}</p>
            </div>
            <div>
                <label>Cuisine:</label>
                <input name='cuisine' value={formState.cuisine} onChange={onChangeHandler} /><br/>
                <p>{message2}</p>
            </div>
            <button>Register</button>
        </form>
    )
}

export default NewRestaurant;
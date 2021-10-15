import React, { useEffect, useState } from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';


const NewCity = () => {
    const [formState, setFormStatet] = useState ({
        name: '',
        population: '',
        imageURL: ''
    })

    function onChangeHandler(event) {
        const {name, value} = event.target;

        setFormStatet({
            ...formState,
            [name]: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios.post('http://localhost:5500/api/cities', formState)
            .then(() => navigate('/cities'))
            .catch(console.log);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label>Name:</label>
            <input 
                name='name'
                value={formState.name}
                onChange={onChangeHandler}
            />
            </div>
            <div>
            <label>Population:</label>
            <input 
                name='population'
                value={formState.population}
                onChange={onChangeHandler}
            />
            </div>
            <div>
            <label>Image:</label>
            <input 
                name='imageURL'
                value={formState.imageURL}
                onChange={onChangeHandler}
            />
            </div>
            <button>Submit</button>
        </form>
    )
}

export default NewCity;
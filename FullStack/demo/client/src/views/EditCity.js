import React, { useEffect, useState } from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const EditCity = ({ id }) => {
    const [city, setCity] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5500/api/cities/' + id)
            .then(response => setCity(response.data))

    }, []);

    function onChangeHandler(event) {
        const {name, value} = event.target;

        setCity({
            ...city,
            [name]: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios.put('http://localhost:5500/api/cities/' + id, city)
            .then(() => navigate('/cities'))
            .catch(console.log);
    }

    if(city === null) {
        return 'Still Fetching the City, Please wait.....';
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label>Name:</label>
            <input 
                name='name'
                value={city.name}
                onChange={onChangeHandler}
            />
            </div>
            <div>
            <label>Population:</label>
            <input 
                name='population'
                value={city.population}
                onChange={onChangeHandler}
            />
            </div>
            <div>
            <label>Image:</label>
            <input 
                name='imageURL'
                value={city.imageURL}
                onChange={onChangeHandler}
            />
            </div>
            <button>Submit</button>
        </form>
    )
}

export default EditCity;
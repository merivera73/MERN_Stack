import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const EditRestaurant = ({ id }) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5500/api/restaurants/' + id)
            .then(response => setRestaurant(response.data))
    }, []);

    function onChangeHandler(event) {
        const {name, value} = event.target;

        setRestaurant({
            ...restaurant,
            [name]: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios.put('http://localhost:5500/api/restaurants/' + id, restaurant)
            .then(() => navigate('/restaurants'))
            .catch(console.log);
    }

    if(restaurant === null) {
        return 'Still Fetching the Restaurant info, Stand Fast.......'
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Restaurant Name:</label>
                <input
                    name='name'
                    value={restaurant.name}
                    onChange={onChangeHandler}
                />
            </div>
            <div>
                <label>Cuisine</label>
                <input 
                    name='cuisine'
                    value={restaurant.cuisine}
                    onChange={onChangeHandler}
                 />
            </div>
            <button>Submit</button>
        </form>
    )
}

export default EditRestaurant;
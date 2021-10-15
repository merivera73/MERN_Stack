import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { navigate } from '@reach/router';

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5500/api/restaurants')
            .then(response => setRestaurants(response.data))
            .catch(console.log);
    }, []);

    function handleDelete(id) {
        axios.delete('http://localhost:5500/api/restaurants/' + id)
        .then(() => {
            const newRestaurants = restaurants.filter(restaurant => restaurant._id !== id);

            setRestaurants(newRestaurants);
        })
    }

    return(
        <div>
            <h1>Let's Eat</h1>
            <button onClick={() => navigate('/restaurants/new')}>Add a New Restaurant</button>
            <table>
                <thead>
                    <tr>
                        <th>Restaurant</th>
                        <th>Cuisine</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants.map(restaurant => (
                        <tr key={restaurant._id}>
                            <td>
                                {restaurant.name}
                            </td>
                            <td>
                                {restaurant.cuisine}
                            </td>
                            <td>
                                <button onClick={() => navigate('/restaurants/' + restaurant._id )}>Read Reviews</button>
                                <button onClick={() => navigate('/restaurants/' + restaurant._id + '/edit')}>Update</button>
                                <button onClick={() => handleDelete(restaurant._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Restaurants;
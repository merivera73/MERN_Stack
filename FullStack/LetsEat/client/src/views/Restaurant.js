import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Restaurant = ({ id }) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5500/api/restaurants/' + id )
            .then(response => setRestaurant(response.data))
            .catch(console.log);
    }, []);
    
    if(restaurant === null) {
        return 'Stand Fast we are retrieving the Restaurant information!!!!!!'
    }

    return (
        <div>
            <h1>{restaurant.name}</h1>
            <button onClick={() => navigate('/restaurants/' + restaurant._id + '/newReview')}>Add a New Review</button>
            <table>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Stars</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurant.reviews.map(review => (
                        <tr key={review._id}>
                            <td>
                                {review.customer}
                            </td>
                            <td>
                                {review.stars}
                            </td>
                            <td>
                                {review.description}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Restaurant;
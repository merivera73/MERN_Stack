import React from 'react';
import axios from 'axios';
export default props => {
    const {restaurantId, successCallback} = props;
    const deleteRestaurant = event => {
        axios.delete('http://localhost:5500/api/restaurants/' + restaurantId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deleteRestaurant}>
            Delete
        </button>
    )
}
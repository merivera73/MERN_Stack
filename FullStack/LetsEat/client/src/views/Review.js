import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import Restaurant from './Restaurant';

const NewReview = ({ id }) => {
    const [reviewState, setReviewState] = useState({
        customer: '',
        stars: '',
        description: ''
    })

    function onChangeHandler(event) {
        const {name, value} = event.target;

        setReviewState({
            ...reviewState,
            [name]: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios.put('http://localhost:5500/api/restaurants/' + id + '/reviews', reviewState)
            .then(() => navigate('/restaurants/' + id))
            .catch(console.log);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Customer Name:</label>
                <input name='customer' value={reviewState.customer} onChange={onChangeHandler} />
            </div>
            <div>
                <label>Rate 1-5:</label>
                <input name='stars' value={reviewState.stars} onChange={onChangeHandler} />
            </div>
            <div>
                <label>Your Review:</label>
                <input name='description' value={reviewState.description} onChange={onChangeHandler} />
            </div>
            <button>Submit</button>
        </form>
    )
}

export default NewReview;
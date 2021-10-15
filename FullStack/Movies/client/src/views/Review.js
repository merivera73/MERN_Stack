import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const NewReview = ({ id }) => {
    const [reviewState, setReviewState] = useState({
        reviewer: '',
        reviewerStars: '',
        reviewerReview: '',
        submitted: false
    })

    function onChangeHandler(event) {
        const {name, value} = event.target;

        setReviewState({
            ...reviewState,
            [name]: value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(reviewState);
        reviewState.reviewer.length < 2 || reviewState.reviewerReview.length < 5  ?
        setReviewState({
            ...reviewState,
            submitted: false
        }) : setReviewState({
            ...reviewState,
            submitted: true
        })

        axios.put('http://localhost:5500/api/movies/' + id + '/reviews', reviewState)
            .then(() => navigate('/movies/' + id))
            .catch(console.log);
    }

    let message = '';
    if(reviewState.reviewer.length < 2){
        message = 'Your name should be at least 2 character !!!!'
    }

    let message2 = '';
    if(reviewState.reviewerReview.length < 5){
        message2 = 'Your review should be longer then that!!!!'
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Your Name:</label>
                <input name='reviewer' value={reviewState.reviewer} onChange={onChangeHandler}/>
                <p>{message}</p>
            </div>
            <div>
                <label>Stars:</label>
                <input name='reviewerStars' value={reviewState.reviewerStars} onChange={onChangeHandler}/>
            </div>
            <div>
                <label>Your Review:</label>
                <input name='reviewerReview' value={reviewState.reviewerReview} onChange={onChangeHandler}/>
                <p>{message2}</p>
            </div>
            <button onClick={() => navigate('/movies')}>Cancel</button>
            <button>Submit</button>
        </form>
    )
}

export default NewReview;
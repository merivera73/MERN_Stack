import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

export default function Main(){
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [stars, setStars] = useState(0);
    const [review, setReview] = useState('');

    const [errors, setErrors] = useState([]);
    const onSubmitHandler = event => {
        axios.post('http://localhost:5500/api/movies', {
            title,
            name,
            stars,
            review
        })
            .then(() => navigate('/movies'))
            .catch(err =>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }

                setErrors(errorArr);
            });
    }

    

    return (
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <div>
                <label>Movie Title:</label>
                <input name='title' type='text' onChange={event => setTitle(event.target.value)} />
            </div>
            <div>
                <label>Your Name:</label>
                <input name='name' type='text' onChange={event => setName(event.target.value)} />
            </div>
            <div>
                <label>Stars:</label>
                <input name='stars' type='number' onChange={event => setStars(event.target.value)} />
            </div>
            <div>
                <label>Your Review:</label>
                <input name='review' type='text' onChange={event => setReview(event.target.value)} />
            </div>
            <button onClick={() => navigate('/movies')}>Cancel</button>
            <button>Submit</button>
        </form>
    )
}




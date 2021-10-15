import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Movie = ({ id }) => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5500/api/movies/' + id)
            .then(response => setMovie(response.data))
            .catch(console.log);
    }, []);

    if(movie === null) {
        return 'Stand Fast we are grabbing that Information for you!!!!'
    }

    function handleDelete(id) {
        axios.delete('http://localhost:5500/api/movies/' + id)
        .then(() => {
             navigate('/movies') 
        })
    }

    

    return (
        <div>
            <h1>Review for {movie.title}</h1>
            <button onClick={() => handleDelete(movie._id)}>Delete</button>

            
            {/* <table>
                <thead>
                    <tr>
                        <td>Reviewer</td>
                        <td>Stars</td>
                        <td>Reviews</td>
                    </tr>
                </thead>
                <tbody>
                {movie.map => (
                        <tr key={movie._id}>
                            <td>{movie.name}</td>
                            <td>{movie.stars}</td>
                            <td>{movie.review}</td>
                        </tr>
                    )};
                </tbody>
            </table> */}



            
            <table>
                <thead>
                    <tr>
                        <td>Reviewer</td>
                        <td>Stars</td>
                        <td>Reviews</td>
                    </tr>
                </thead>
                <tbody>                    
                    {movie.reviews.map(review => (
                        <tr key={review._id}>
                            <td>
                                {review.reviewer}
                            </td>
                            <td>
                                {review.reviewerStars}
                            </td>
                            <td>
                                {review.reviewerReview}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Movie;
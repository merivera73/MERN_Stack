import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { navigate } from '@reach/router';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5500/api/movies')
            .then(response => setMovies(response.data))
            .catch(console.log);
    }, []);

    function handleDelete(id) {
        axios.delete('http://localhost:5500/api/movies/' + id)
        .then(() => {
            const newMovies = movies.filter(movie => movie._id !== id);

            setMovies(newMovies);

        })
    }

    return (
        <div>

            <h3>Movie List</h3>
            <button onClick={() => navigate('/movies/new')}>Add a New Movie</button>
            <table>
                <thead>
                    <tr>
                        <td>Movie Title</td>
                        <td>Available Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>
                                <button onClick={() => navigate('/movies/' + movie._id)}>Read Reviews</button>
                                <button onClick={() => navigate('/movies/' + movie._id + '/review')}>Write Review</button>
                                <button onClick={() => handleDelete(movie._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default Movies;
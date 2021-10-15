import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {Link, navigate} from '@reach/router';


const Cities = () => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5500/api/cities')
            .then(response => setCities(response.data))
            .catch(console.log);
    }, []);

    function handleDelete(id) {
        axios.delete('http://localhost:5500/api/cities/' + id)
            .then(() => {
                const newCities = cities.filter(city => city._id !== id);

                setCities(newCities);
            })
    }
    
    return(
        <div>
            <div>
                <h1>Cities</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cities.map(city => (
                        <tr key={city._id}>
                            <td>
                                <Link to={'/cities/' + city._id}>{city.name}</Link>
                            </td>
                            <td>
                                <button onClick={()=> navigate('/cities/' + city._id + '/edit')}>Edit</button>
                                <button onClick={() => handleDelete(city._id)}>Delete</button>
                            </td>
                        </tr>
                        ))}                        
                    </tbody>
                </table>
               
            </div>
        </div>
    )
}

export default Cities;
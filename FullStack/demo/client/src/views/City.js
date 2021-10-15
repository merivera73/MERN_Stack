import React, { useEffect, useState } from  'react';
import axios from 'axios';

const City = ({ id }) => {
    const [city, setCity] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5500/api/cities/' + id)
            .then(response => setCity(response.data))
            .catch(console.log);
    }, []);

    if(city === null) {
        return 'Fetching the City please wait!!!!!';
    }

    return (
        <div>
            <h1>{city.name}</h1>
            <p>Population: {city.population}</p>
            <img src={city.imageURL} />
        </div>
    )

}

export default City;

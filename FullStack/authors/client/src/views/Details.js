import React, { useEffect, useState} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';

export default props => {
    const [author, setAuthor] = useState({})
    useEffect(() => {
        axios.get('http://localhost:5500/api/author/' + props.id)
            .then(res=> setAuthor(res.data))
    }, [])
    console.log(author);
    return(
        <div>
            <p>Author Name: {author.name}</p>
        </div>
    )
}
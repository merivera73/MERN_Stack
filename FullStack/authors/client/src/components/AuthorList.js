import React, { useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import DeleteButton from './DeleteButton';
export default props => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5500/api')
            .then(res => setAuthors(res.data));
    }, [])
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }
    return (
        <div>
            {authors.map((author, id) => {
                return (
                    <p key={id}>
                        <Link to={'/' + author._id} >
                            {author.name}
                        </Link>
                        <Link to={'/' + author._id + '/edit'}>
                            edit
                        </Link>
                        <DeleteButton authorId={author._id} successCallback={() => removeFromDom(author._id)} />
                    </p>
                )
            })}
        </div>
    )
}
import React, { useEffect, UseState, useState} from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';

export default props => {
    const { id } = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost5500/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])

    const updateAuthor = author => {
        axios.put('http://localhost:5500/api/authors/' + id, author)
            .then(res => console.log(res));
    }

    return (
        <div>
            {loaded && (
                <AuthorForm onSubmitProp = {updateAuthor} initialName = {author.name} />
            )}
        </div>
    )
}
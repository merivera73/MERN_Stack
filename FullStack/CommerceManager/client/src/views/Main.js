import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import Details from './Details';

import { Router, navigate} from '@reach/router';

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:5500/api/products')
            .then(res=>{
                setProducts(res.data)
                setLoaded(true);
            });
    }, [])
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }

    return (
        <Router>
            <ProductForm path="/api/products/new"/>
            <ProductList path="/api/products" />
            <Details path="/api/products/:id" />
        </Router>

        // <div>
        //     {/* <ProductForm/> */}
        //     {loaded && <ProductList products = {products} removeFromDom={removeFromDom}/>}
        // </div>
    )
}
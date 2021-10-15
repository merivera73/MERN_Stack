import React, { useEffect, useState} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
export default () => {
    // const [message, setMessage] = useState("Products are Loading...")
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5500/api/products")
            .then(res=>setProducts(res.data))
            .catch(err=>console.log("Error: ", err))
    }, []);
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }
    return(
        <div>
            <ProductForm/>
            <hr />
            <ProductList products={products} removeFromDom={removeFromDom} />
        </div>
    )
}
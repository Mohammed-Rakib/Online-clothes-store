import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckOutTable from './CheckOutTable';

const CheckOut = () => {
    const [products, setProduct] = useState([]);
    useEffect( () => {
        const url = `http://localhost:4001/products`;
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setProduct(data);
        })
    } ,[]);
    
    const {Id} = useParams();
    const product = products.filter(pd => pd._id === Id);
    return (
        <div className="container my-5">
            <h1>Checkout</h1>
            {
                product.map(product => <CheckOutTable product={product} key={product._id} ></CheckOutTable>)
            }
        </div>
    );
};

export default CheckOut;
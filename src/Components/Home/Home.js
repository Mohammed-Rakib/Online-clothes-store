import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url =`https://young-shelf-43530.herokuapp.com/products`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    },[]);
    return (
        <div className="container my-5">
            <div className="row">
                {
                    products.map(product => <Card product={product} key={product._id}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;
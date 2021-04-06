import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderedProduct from './OrderedProduct';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderedProducts, setOrderedProucts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4001/orderedProducts?email='+loggedInUser.email)
        .then(response => response.json())
        .then(data =>{
            setOrderedProucts(data);
        })
    },[])
    return (
        <div className="container my-5">
            <h1 className="text-success my-3">Ordered Products</h1>
             <table className="table">
        <thead>
            <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Auther Name</th>
            <th scope="col">Size</th>
            <th scope="col">Price</th>
            </tr>
        </thead>
        <tbody>
            
        {
                orderedProducts.map(product => <OrderedProduct product={product} key={product._id} ></OrderedProduct>  )
         }
            
        </tbody>
        </table>
           
        </div>
    );
};

export default Orders;
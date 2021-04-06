import React, { useEffect, useState } from 'react';
import ManagePdTable from './ManagePdTable';

const ManageProduct = () => {
    const [products, setProduct] = useState([]);
    useEffect( () => {
        const url = `https://young-shelf-43530.herokuapp.com/products`;
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setProduct(data);
        })
    } ,[]);
    
    return (
        <div className="container my-5">
           <table className="table">
        <thead>
            <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Auther Name</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            
            {
                 products.map(product => <ManagePdTable product={product} key={product._id} ></ManagePdTable>)
            }
            
        </tbody>
        </table>
             
        </div>
    );
};

export default ManageProduct;
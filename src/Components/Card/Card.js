import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import { RiShoppingCart2Line } from 'react-icons/ri';
const Card = (props) => {
    const {name, imageUrl, size, price , _id} = props.product;
    return (
        
        <div className="col-md-4  p-5">
            <div className="card p-5 cardBody">
                <img src={imageUrl} alt=""/>
                <div className="card-body">
                    <h6>{name}</h6>
                    <p>Available size: {size}</p>
                    <h5 className="buyNow mt-2">Price: ${price}</h5>
                </div>
                <Link className="buyBtn " to={`/checkOut/${_id}`} > <RiShoppingCart2Line/> Buy Now</Link>
            </div>
        
            
        </div>
       
    );
};

export default Card;
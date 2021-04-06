import React, { useContext } from 'react';
import { UserContext } from '../../App';

const CheckOutTable = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {displayName , email} = loggedInUser;
    const {name, price} = props.product;


    const handleCheckout = () => {
        const orderedProduct = {displayName,email,...props.product}
        fetch('https://young-shelf-43530.herokuapp.com/checkOut', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(orderedProduct)
        })
        .then(res => res.json())
        .then(data => {
            
        })
    }
    return (
        <div>
            <table className="table table-sm">
            <thead>
                <tr>
                <th scope="col">Description</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{name}</td>
                <td>1</td>
                <td>${price}</td>
                </tr>
                <tr>
                
                <td colSpan="2">Total</td>
                <td>${price}</td>
                </tr>
            </tbody>
            </table>
            <button onClick={handleCheckout} className="btn btn-outline-primary" >CheckOut</button>
        </div>
    );
};

export default CheckOutTable;
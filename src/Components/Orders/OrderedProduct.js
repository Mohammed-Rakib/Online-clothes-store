import React from 'react';

const OrderedProduct = (props) => {
    const {name, displayName,price, size} = props.product;
    return (
        <tr>
            <td>{name}</td>
            <td>{displayName}</td>
            <td>{size}</td>
            <td> ${price} </td>
        </tr>
    );
};

export default OrderedProduct;
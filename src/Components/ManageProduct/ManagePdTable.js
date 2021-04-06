import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
const ManagePdTable = (props) => {
    const {name, price,_id} = props.product;
    
    const deleteProduct = (id) => {
        fetch(`https://young-shelf-43530.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then( result =>{
            console.log('deleted successfully')
        })
    }
    return (
        <tr>
            <td>{name}</td>
            <td>mohammed Rakib</td>
            <td>${price}</td>
            <td> <button onClick={() =>deleteProduct(`${_id}`)} style={{border:'none',cursor: 'pointer',  borderRadius:'5px'}} 
            ><AiOutlineDelete style={{color:'#f44336'}} /></button> </td>
        </tr>
    );
};

export default ManagePdTable;
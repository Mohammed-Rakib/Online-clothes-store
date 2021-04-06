import React from 'react';
import './Admin.css'
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { BiEditAlt } from 'react-icons/bi';
import { FaAlignJustify} from 'react-icons/fa';
const Admin = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className=" navigation-menu">
                    <ul className="navList">
                        <li>
                        <Link to="/manageProduct"> <FaAlignJustify className="icon"/> Manage Product</Link>
                        </li>
                        <li>
                        <Link to="/addProduct"> <MdAdd className="icon"/> Add Product</Link>
                        </li>
                        <li>
                        <Link to="/admin"> <BiEditAlt className="icon"/> Edit Product</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Admin;
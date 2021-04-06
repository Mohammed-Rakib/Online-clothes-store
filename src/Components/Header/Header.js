import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
    return (
    <div className="container">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">T-store</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <Link to="/home" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                <Link to="/orders" className="nav-link">Orders</Link>
                </li>
                <li className="nav-item">
                <Link to="/admin" className="nav-link">Admin</Link>
                </li>
                <li className="nav-item">
                <Link to="/deals" className="nav-link">Deals</Link>
                </li>
                <li className="nav-item">
                {
                    loggedInUser.displayName ?  <p style={{padding: "10px 20px"}} >{loggedInUser.displayName}</p> :
                   <Link to="/login" className="nav-link btn btn-primary">Login</Link>  
                }
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
    );
};

export default Header;
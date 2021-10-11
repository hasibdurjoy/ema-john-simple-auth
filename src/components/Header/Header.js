import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                <NavLink to="/shipping">Shipping</NavLink>
                {
                    !user.email ? <>
                        <NavLink to="/login">log In</NavLink>
                        <NavLink to="/register">Register</NavLink>
                    </>
                        :
                        <>
                            <small className="text-white">{user.displayName}</small>
                            <img src={user.photoURL} style={{ height: '40px', borderRadius: '50%' }} alt="" />
                            <button onClick={logOut} className="btn btn-danger rounded-pill">Log Out</button>
                        </>
                }
            </nav>
        </div>
    );
};

export default Header;
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assest/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='d-md-flex align-items-center justify-content-around '>
            <div className="logo-container d-flex justify-content-center align-items-center">
                <div className="logo">
                    <img src={logo} alt="" srcset="" />
                </div>
                <div className="name ms-2">
                    <h4>Campus</h4>
                </div>
            </div>
            <div className="nav-link">
                <NavLink
                    className={({ isActive }) => (isActive ? "active-link" : "link")}
                    to='/'
                >
                    HOME
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "active-link" : "link")}
                    to='/reviews'
                >
                    REVIEWS
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "active-link" : "link")}
                    to='/dashboard'
                >
                    DASHBOARD
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "active-link" : "link")}
                    to='/blogs'
                >
                    BLOGS
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "active-link" : "link")}
                    to='/about'
                >
                    ABOUT
                </NavLink>

            </div>
        </div>
    );
};

export default Header;
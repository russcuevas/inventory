import React from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaUser } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='left-section'>
                <Link to="/dashboard">
                    <img src="https://www.pngmart.com/files/8/Inventory-PNG-Photos.png" alt="Logo" className='logo' />
                    IMS
                </Link>
            </div>
            <div className='right-section'>
                <Link to="/notifications" className='notification'><FaBell /></Link>
                <Link to="/profile" className='profile'><FaUser /></Link>
            </div>
        </div>
    );
};

export default Header;

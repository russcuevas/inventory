import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUsers, FaBoxOpen, FaShoppingCart, FaChartBar } from 'react-icons/fa';
import './Leftsidebar.css';

const Leftsidebar = () => {
    const location = useLocation();

    return (
        <div className="left-sidebar">
            <ul>
                <li>
                    <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
                        <FaHome /> Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/users" className={location.pathname === '/users' ? 'active' : ''}>
                        <FaUsers /> Users
                    </Link>
                </li>
                <li>
                    <Link to="/inventory" className={location.pathname === '/inventory' ? 'active' : ''}>
                        <FaBoxOpen /> Inventory
                    </Link>
                </li>
                <li>
                    <Link to="/orders" className={location.pathname === '/orders' ? 'active' : ''}>
                        <FaShoppingCart /> Orders
                    </Link>
                </li>
                <li>
                    <Link to="/reports" className={location.pathname === '/reports' ? 'active' : ''}>
                        <FaChartBar /> Reports
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Leftsidebar;

import React from 'react';
import Header from '../components/dashboard/_Header';
import Leftsidebar from '../components/dashboard/_Leftsidebar';
import './Dashboard.css';

const Inventory = () => {
    return (
        <div className="dashboard-container">
            <Header />
            <div className="dashboard-content">
                <Leftsidebar />
                <div className="main-content">
                    <h1>Inventory Management</h1>
                </div>
            </div>
        </div>
    )
};

export default Inventory;
import React from 'react';
import Header from '../components/dashboard/_Header';
import Leftsidebar from '../components/dashboard/_Leftsidebar';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Header />
            <div className="dashboard-content">
                <Leftsidebar />
                <div className="main-content">
                    <div className="stats-container">
                        <div className="stats-box">
                            <h2>Total Users</h2>
                            <p>100</p>
                        </div>
                        <div className="stats-box">
                            <h2>Total Orders</h2>
                            <p>50</p>
                        </div>
                        <div className="stats-box">
                            <h2>Total Sales</h2>
                            <p>₱5000.27</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

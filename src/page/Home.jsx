import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-body">
            <div className="home-container">
                <h1>Home Page</h1>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="register-body">
            <div className="register-container">
                <h1 className="register-title">Register</h1>
                <form className="register-form">
                    <label className="register-label" htmlFor="fullname">Full Name</label>
                    <input className="register-input" type="text" name="fullname" id="fullname" placeholder="Enter your full name" />

                    <label className="register-label" htmlFor="email">Email</label>
                    <input className="register-input" type="email" name="email" id="email" placeholder="Enter your email" />

                    <label className="register-label" htmlFor="password">Password</label>
                    <input className="register-input" type="password" name="password" id="password" placeholder="Enter your password" />

                    <label className="register-label" htmlFor="confirm-password">Confirm Password</label>
                    <input className="register-input" type="password" name="confirm-password" id="confirm-password" placeholder="Confirm your password" />

                    <label className="register-label" htmlFor="contact">Contact</label>
                    <input className="register-input" type="text" name="contact" id="contact" placeholder="Enter your contact number" />
                    <Link className='register-login' to="/login">If you already have an account click here</Link>

                    <button className="register-button" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;

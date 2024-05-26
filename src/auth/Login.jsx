import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = (event) => {
        event.preventDefault();
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className='login-body'>
            <div className="login-container">
                <h1 className="login-title">Login</h1>
                <form className="login-form" action="">
                    <label className="login-label" htmlFor="email">Email</label>
                    <input className="login-input" type="text" name='email' id="email" />
                    <label className="login-label" htmlFor="password">Password</label>
                    <input className="login-input" type="password" name='password' id="password" />
                    <Link className='login-register' to="/register">Click here to register</Link>
                    <a onClick={openModal} className="login-forgot" href="#">Forgot password</a>
                </form>
            </div>
            <Modal show={showModal} onHide={closeModal} dialogClassName="modal-top">
                <Modal.Header style={{ backgroundColor: '#752738' }} closeButton>
                    <Modal.Title style={{ color: 'white' }}>Forgot Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="resetEmail" className="form-label">Enter your email address</label>
                            <input type="email" className="form-control" id="resetEmail" placeholder="Enter email" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                    <Button variant="primary" style={{ backgroundColor: '#752738', border: 'none' }} onClick={closeModal}>
                        Reset Password
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Login;

import React, { useState } from 'react';
import Header from '../components/dashboard/_Header';
import Leftsidebar from '../components/dashboard/_Leftsidebar';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';
import './Users.css';

const Users = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="dashboard-container">
            <Header />
            <div className="dashboard-content">
                <Leftsidebar />
                <div className="main-content">
                    <h1>Users Management</h1>
                    <div className='main-section'>
                        <button onClick={openModal} className='add-user-button'>Add User +</button>

                        <div className='filter'>
                            <label htmlFor="status-filter">Filter by Status:</label>
                            <select id="status-filter">
                                <option value="">All</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                        <div className='search'>
                            <label htmlFor="search-input">Search by Name:</label>
                            <input type="text" id="search-input" placeholder="Enter name..." />
                        </div>
                        <div className='main-table'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            <input type="checkbox" />
                                        </th>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Contact</th>
                                        <th>Status</th>
                                        <th>Added At</th>
                                        <th>Modify At</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td>1</td>
                                        <td>Russel Vincent Cuevas</td>
                                        <td>russelcuevas0@gmail.com</td>
                                        <td>09495748302</td>
                                        <td>Active</td>
                                        <td>May/5/2024</td>
                                        <td>May/6/2024</td>
                                        <td>
                                            <a href="#" style={{ color: '#752738', textDecoration: 'none' }}>
                                                <FontAwesomeIcon icon={faEdit} /> Update
                                            </a>
                                            <br />
                                            <a href="#" style={{ color: '#752738', textDecoration: 'none' }}>
                                                <FontAwesomeIcon icon={faTrashAlt} /> Delete
                                            </a>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td>2</td>
                                        <td>Russel Vincent Cuevas</td>
                                        <td>russelcuevas0@gmail.com</td>
                                        <td>09495748302</td>
                                        <td>Active</td>
                                        <td>May/5/2024</td>
                                        <td>May/6/2024</td>
                                        <td>
                                            <a href="#" style={{ color: '#752738', textDecoration: 'none' }}>
                                                <FontAwesomeIcon icon={faEdit} /> Update
                                            </a>
                                            <br />
                                            <a href="#" style={{ color: '#752738', textDecoration: 'none' }}>
                                                <FontAwesomeIcon icon={faTrashAlt} /> Delete
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showModal} onHide={closeModal} centered>
                <Modal.Header style={{ backgroundColor: '#752738' }} closeButton>
                    <Modal.Title style={{ color: 'white' }}>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="fullname" className="form-label">Fullname:</label>
                            <input type="text" className="form-control" id="fullname" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password:</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">Contact:</label>
                            <input type="text" className="form-control" id="contact" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                    <Button variant="primary" style={{ backgroundColor: '#752738', border: 'none' }} onClick={closeModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};

export default Users;

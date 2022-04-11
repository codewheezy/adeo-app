import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Welcome = () => {
    return(
        <div className='home-container'>
            <div className='skip-wrap'>
                <Link to="/quiz" className='btn-skip'>Skip</Link>
            </div>
            <div className='content-wrap'>
                <div className='content-max-width'>
                    <h1>Welcome to the Ado Experience</h1>
                    <p className='first-txt'>You currently have <strong>NO</strong> Subscriptions</p>
                    <p className='second-txt'>First take a diagnostic test to determine the right course for you.</p>
                    <Link to="/quiz" className='btn-go'>Let's go</Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Welcome;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({user, onLogout}) => {
    return (
    <div>
        <nav>
            <ul className='main-navbar'>
                {user && (
                    <>
                    <li className='main-menu'>
                        <Link to="/challenges" className='main-menu-btn'>{user.nickname}'S CHALLANGE💪</Link>
                    </li>
                    <li className='main-menu'>
                        <Link to="/" className='main-menu-btn' onClick={onLogout}>Logout</Link>
                    </li>
                    </>
                )}
                {!user && (
                    <>
                    <li className='main-menu'>
                        <Link to="/" className='main-menu-btn'>Home</Link>
                    </li>
                    <li className='main-menu'>
                        <Link to="/login" className='main-menu-btn'>LogIn/ SignUp</Link>
                    </li>
                    </>

                )}
            </ul>
        </nav>
    </div>
    )
};

export default Navbar;
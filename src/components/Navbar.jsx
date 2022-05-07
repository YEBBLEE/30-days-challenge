import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
    <div>
        <nav>
            <ul className='main-navbar'>
                <li className='main-menu'>
                    <Link to="/" className='main-menu-btn'>Home</Link>
                </li>
                <li className='main-menu'>
                    <Link to="/login" className='main-menu-btn'>LogIn/ SignUp</Link>
                </li>
            </ul>
        </nav>
    </div>
    )
};

export default Navbar;
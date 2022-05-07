import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">LogIn/ SignUp</Link>
                </li>
            </ul>
        </nav>
    </div>
    )
};

export default Navbar;
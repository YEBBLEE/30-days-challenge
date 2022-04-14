import React, { Component } from 'react';
import '../navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <h1 className='navbar-title'>30 DAYS CHALLANGE</h1>
                <div className='count-box'>
                    <span className='navbar-txt'>in progress : </span>
                    <span className='navbar-countNumber'>3</span>
                </div>
            </nav>
        );
    }
}

export default Navbar;
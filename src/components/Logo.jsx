import React, { PureComponent } from 'react';

class Logo extends PureComponent {
    render() {
        console.log(`[Logo] Render!`);
        return (
            <div className='navbar'>
                <h1 className='navbar-title'>30 DAYS CHALLANGE</h1>
            </div>
        );
    }
}

export default Logo;
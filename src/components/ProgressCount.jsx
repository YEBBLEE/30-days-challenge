import React, { PureComponent } from 'react';

class ProgressCount extends PureComponent {
    render() {
    console.log('[ ProgressCount ] Render');
        return (
            <nav className='navbar'>
                <h1 className='navbar-title'>30 DAYS CHALLANGE</h1>
                <div className='count-box'>
                    <span className='navbar-txt'>in progress : </span>
                    <span className='navbar-countNumber'>{this.props.countNumber}</span>
                </div>
            </nav>
        );
    }
}

export default ProgressCount;
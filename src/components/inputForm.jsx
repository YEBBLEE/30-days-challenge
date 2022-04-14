import React, { Component } from 'react';

class InputForm extends Component {

    render() {
        return (
            <form action="" className='challenge-form'>
                <input type="text" className='challenge-input' placeholder='Input your challenge to start'/>
                <button className='challenge-btn'>START!</button>
            </form>
        );
    }
}

export default InputForm;
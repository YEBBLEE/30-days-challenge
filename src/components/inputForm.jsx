import React, { Component } from 'react';

class InputForm extends Component {
    inputRef = React.createRef();

    handleStart = (e) => {
        e.preventDefault();
        const title = this.inputRef.current.value;
        title && this.props.onStart(title);
        this.inputRef.current.value='';
    };

    render() {
        return (
            <form className='challenge-form' onSubmit={this.handleStart}>
                <input 
                    ref={this.inputRef}
                    type="text" 
                    className='challenge-input' 
                    placeholder='Input your challenge to start'
                />
                <button className='challenge-btn'>START!</button>
            </form>
        );
    }
}

export default InputForm;
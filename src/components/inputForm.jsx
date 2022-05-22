import React, { PureComponent } from 'react';

class InputForm extends PureComponent {
    inputRef = React.createRef();

    handleStart = (e) => {
        e.preventDefault();
        const title = this.inputRef.current.value;
        title && this.props.onStart(title);
        this.inputRef.current.value='';
    };

    render() {
        console.log(`[InputForm] Render!`);
        return (
            <form className='challenge-form' onSubmit={this.handleStart}>
                <input 
                    ref={this.inputRef}
                    type="text" 
                    className='challenge-input' 
                    placeholder='Input your challenge to start'
                />
                <div className="wrapper">
                    <button className='challenge-btn'>
                        <span>START!</span>
                    </button>
                </div>
            </form>
        );
    }
}

export default InputForm;
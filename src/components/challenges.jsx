import React, { Component } from 'react';
import Challenge from './challenge';
import InputForm from './inputForm';

class Challenges extends Component {
    handleStart = (title) => {
        this.props.onStart(title);
    }

    handleDelete = (challenge) => {
        this.props.onDelete(challenge);
    }
    
    handleModify = (title,challenge) => {
        this.props.onModify(title,challenge);
    }
    
    render() {
        return (
            <>
                <InputForm
                    onStart = {this.handleStart}
                />
                <ul className='challenges'>
                    {this.props.challenges.map(challenge => 
                        <Challenge
                            key={challenge.id}
                            challenge={challenge}
                            onDelete={this.handleDelete}
                            onModify={this.handleModify}
                        />
                    )}
                </ul>
            </>
            
        );
    }
}

export default Challenges;
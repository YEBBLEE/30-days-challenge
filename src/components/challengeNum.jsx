import React, { Component } from 'react';

class ChallengeNum extends Component {

    handleNumber = () => {
        this.props.onNumberClicked(this.props.challenge,this.props.day,!this.props.day.isChecked);
    }

    render() {
        const {number,isChecked} = this.props.day;
        return (
            <div onClick={this.handleNumber}>
                <p ref={this.numRef} 
                    className={isChecked? 'number-through':''}>
                    {number}
                </p>
            </div>
        );
    }
}

export default ChallengeNum;
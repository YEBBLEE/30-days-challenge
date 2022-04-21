import React, { Component } from 'react';

class ChallengeNum extends Component {

    handleNumber = () => {
        this.props
        .onNumberClicked(this.props.challenge,
            this.props.challenge.days,
            !this.props.day.isChecked,
            this.props.day.number);
    }

    render() {
        const {number,isChecked} = this.props.day;
        return (
            <div onClick={this.handleNumber}>
                <p
                    className={isChecked? 'number-through':''}>
                    {number}
                </p>
            </div>
        );
    }
}

export default ChallengeNum;
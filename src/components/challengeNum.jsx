import React, { Component } from 'react';

class ChallengeNum extends Component {
    state = {
        bouncing:false
    }

    handleNumber = () => {
        this.props
        .onNumberClicked(this.props.challenge,
            this.props.challenge.days,
            !this.props.day.isChecked,
            this.props.day.number);
    }

    toggleRubberBand = (e) => {
        this.setState({bouncing : !this.state.bouncing});
    }

    render() {
        const {number,isChecked} = this.props.day;
        return (
            <div onMouseEnter={this.toggleRubberBand}>
                <p
                    className={`
                        ${this.state.bouncing ? 'bouncing' : ''}
                        ${isChecked? 'number-through':''}`}
                    
                    onClick={this.handleNumber} 
                    >
                    {number}
                </p>
            </div>
        );
    }
}

export default ChallengeNum;
import React, { Component } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import '../common/circle.css';
import ChallengeNum from './ChallengeNum';

class Challenge extends Component {
    titleRef = React.createRef();
    
    state = {
        disabled : true
    }    
    
    handleDelete = () => {
        this.props.onDelete(this.props.challenge);
    }

    handleEdit = () => {
        console.log('펜슬아이콘 클릭!');
        this.setState({disabled : !this.state.disabled});
    }
    
    handleModify = () => {
        console.log('체크아이콘 클릭!');
        this.setState({disabled : !this.state.disabled});
        const titleInput = this.titleRef.current.value;
        titleInput && this.props.onModify(titleInput,this.props.challenge);
    }

    handleNumber = (challenge,day,isClicked) => {
        this.props.onNumberClicked(challenge,day,isClicked);
    }

    render() {
        console.log(this.props);
        const {title,days,startDate,endDate} = this.props.challenge;
        const count = days.filter(day => day.isChecked).length;
        const ratio = (count/days.length)*100;

        return (
            <li className='challenge'>
                <div className="top-box">
                    <input 
                        ref={this.titleRef}
                        type="text" 
                        className="challenge-title" 
                        defaultValue={title} 
                        disabled={this.state.disabled}>
                    </input>
                    <div>
                        {this.state.disabled === false ?
                            <button
                                className='challenge-button'
                                onClick={this.handleModify}>
                                <i className="fa-solid fa-check modify-btn"></i>
                            </button>:''
                        }
                        {this.state.disabled ?
                            <>
                                <button 
                                    className='challenge-button'
                                    onClick={this.handleEdit}>
                                    <i className="fa-solid fa-pen-to-square edit-btn"></i>
                                </button>
                                <button 
                                    className='challenge-button'
                                    onClick={this.handleDelete}>
                                    <i className="fa-solid fa-trash-can delete-btn"></i>
                                </button>
                            </>
                            : ''
                        }
                    </div>
                </div>
                <div className="mid-box">
                    {
                        days.map( day => 
                            <ChallengeNum key={day.number} 
                            day={day}
                            challenge={this.props.challenge}
                            onNumberClicked={this.handleNumber}
                            />
                        )
                    }
                </div>
                <div className="bottom-box">
                    {
                        ratio !== 0 ?
                        <div className="progress-circle">
                            <CircularProgressbar value={ratio} text={count}/>
                        </div> :
                        <div className="progress-circle">
                            <p className='progress-zero'>{count}</p>
                        </div>
                    }
                    <div className="day-info">
                        <p>Start : {startDate}</p>
                        <p>End : {endDate}</p>
                    </div>
                </div>
            </li>
        );
    }
}

export default Challenge;
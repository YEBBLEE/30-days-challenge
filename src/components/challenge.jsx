import React, { PureComponent } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import '../common/circle.css';
import ChallengeNum from './ChallengeNum';

class Challenge extends PureComponent {
    titleRef = React.createRef();
    
    state = {
        disabled : true
    }    
    
    handleDelete = () => {
        this.props.onDelete(this.props.challenge);
    }

    handleEdit = () => {
        this.setState({disabled : !this.state.disabled});
    }
    
    handleModify = () => {
        this.setState({disabled : !this.state.disabled});
        const titleInput = this.titleRef.current.value;
        titleInput && this.props.onModify(titleInput,this.props.challenge);
    }

    handleNumber = (challenge,daysInfo,isClicked,number) => {
        this.props.onNumberClicked(challenge,daysInfo,isClicked,number);
    }

    render() {
        const {title,daysInfo,startDate,endDate} = this.props.challenge;
        const dayList = daysInfo.days;
        const count = dayList.filter(day => day.isChecked).length;
        const ratio = (count/dayList.length)*100;

        return (
            <li className='challenge'>
                <div className="top-box">
                    <div className="title-box">
                        <input 
                            ref={this.titleRef}
                            type="text" 
                            className='challenge-title' 
                            defaultValue={title} 
                            disabled={this.state.disabled}>
                        </input>
                        <label className={`bottom-line ${this.state.disabled ? 'no-focus' : 'focus'}`}></label>
                    </div>
                    <div className='btn-box'>
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
                        dayList.map( day => 
                            <ChallengeNum 
                            key={day.number} 
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
import React, { Component } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import '../common/circle.css';

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
        const titleInput = this.titleRef.current.value;
        titleInput && this.props.onModify(titleInput,this.props.challenge);
    }

    render() {
        console.log(this.props);
        const {title,days,startDate,endDate,isProgress} = this.props.challenge;
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
                        <button 
                            className='challenge-button'
                            onClick={this.handleEdit}>
                            <i className="fa-solid fa-pen-to-square edit-btn"></i>
                        </button>
                        {this.state.disabled ?
                            <button 
                                className='challenge-button'
                                onClick={this.handleDelete}>
                                <i className="fa-solid fa-trash-can delete-btn"></i>
                            </button> : ''
                        }
                    </div>
                </div>
                <div className="mid-box">
                    {days.map(day => 
                        <p key={day.number} value={day.isChecked}>
                            {day.number}
                        </p>    
                    )}
                </div>
                <div className="bottom-box">
                    <div className="progress-circle">
                        <CircularProgressbar value={ratio} text={count}/>
                    </div>
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
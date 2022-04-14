import React, { Component } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import '../common/circle.css';

class Challenge extends Component {
    
    render() {
        console.log(this.props);
        const {title,days,startDate,endDate,isProgress} = this.props.challenge;
        const count = days.filter(day => day.isChecked).length;
        const ratio = (count/days.length)*100;

        return (
            <li className='challenge'>
                <div className="top-box">
                    <input type="text" className="challenge-title" defaultValue={title} disabled></input>
                    <div>
                        <button className='challenge-button'>
                            <i className="fa-solid fa-pen-to-square edit-btn"></i>
                        </button>
                        <button className='challenge-button'>
                            <i className="fa-solid fa-trash-can delete-btn"></i>
                        </button>
                    </div>
                </div>
                <div className="mid-box">
                    {days.map(day => 
                        <p key={day.number}>
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
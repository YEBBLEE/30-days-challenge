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
        const barStyle = {
            color: '#41F1FE'
        };

        console.log(ratio);

        return (
            <li className='challenge'>
                <div className="top-box">
                    <span className="challenge-title">{title}</span>
                    <div>
                        <button className='challenge-button'>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button className='challenge-button'>
                            <i className="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>
                <div className="mid-box">
                    {days.map(day => 
                        <button key={day.number}>
                            {day.number}
                        </button>    
                    )}
                </div>
                <div className="bottom-box">
                    <div className="day-info">
                        <p>Start : {startDate}</p>
                        <p>End : {endDate}</p>
                    </div>
                    <div className="progress-circle">
                        <CircularProgressbar value={ratio} text={count} styles={barStyle}/>
                    </div>
                </div>
            </li>
        );
    }
}

export default Challenge;
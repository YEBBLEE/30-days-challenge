import React, { Component } from 'react';
import Challenge from './challenge';
import InputForm from './inputForm';

class Challenges extends Component {
    
    state = {
        challenges : [
            {
                id:1,
                title: '😎 1일 1 개발 블로그 포스팅',
                days: [
                    {number:1 , isChecked: true},
                    {number:2 , isChecked: true},
                    {number:3 , isChecked: true},
                    {number:4 , isChecked: false},
                    {number:5 , isChecked: false},
                    {number:6 , isChecked: false},
                    {number:7 , isChecked: false},
                    {number:8 , isChecked: false},
                    {number:9 , isChecked: false},
                    {number:10 , isChecked: false},
                    {number:11, isChecked: false},
                    {number:12 , isChecked: false},
                    {number:13 , isChecked: false},
                    {number:14 , isChecked: false},
                    {number:15 , isChecked: false},
                    {number:16 , isChecked: false},
                    {number:17 , isChecked: false},
                    {number:18 , isChecked: false},
                    {number:19 , isChecked: false},
                    {number:20 , isChecked: false},
                    {number:21 , isChecked: false},
                    {number:22 , isChecked: false},
                    {number:23 , isChecked: false},
                    {number:24 , isChecked: false},
                    {number:25 , isChecked: false},
                    {number:26 , isChecked: false},
                    {number:27 , isChecked: false},
                    {number:28 , isChecked: false},
                    {number:29 , isChecked: false},
                    {number:30 , isChecked: false},
                ],
                startDate: new Date().toLocaleDateString(),
                endDate: new Date().toLocaleDateString(),
                isProgress: true
            },
            {
                id:2,
                title: '🧎‍♀️🌟매일 아침 10분 스트레칭',
                days: [
                    {number:1 , isChecked: false},
                    {number:2 , isChecked: false},
                    {number:3 , isChecked: false},
                    {number:4 , isChecked: false},
                    {number:5 , isChecked: false},
                    {number:6 , isChecked: false},
                    {number:7 , isChecked: false},
                    {number:8 , isChecked: false},
                    {number:9 , isChecked: false},
                    {number:10 , isChecked: false},
                    {number:11, isChecked: false},
                    {number:12 , isChecked: false},
                    {number:13 , isChecked: false},
                    {number:14 , isChecked: false},
                    {number:15 , isChecked: false},
                    {number:16 , isChecked: false},
                    {number:17 , isChecked: false},
                    {number:18 , isChecked: false},
                    {number:19 , isChecked: false},
                    {number:20 , isChecked: false},
                    {number:21 , isChecked: false},
                    {number:22 , isChecked: false},
                    {number:23 , isChecked: false},
                    {number:24 , isChecked: false},
                    {number:25 , isChecked: false},
                    {number:26 , isChecked: false},
                    {number:27 , isChecked: false},
                    {number:28 , isChecked: false},
                    {number:29 , isChecked: false},
                    {number:30 , isChecked: false},
                ],
                startDate: new Date().toLocaleDateString(),
                endDate: new Date().toLocaleDateString(),
                isProgress: true
            }
        ]
    }

    render() {
        return (
            <>
                <InputForm/>
                <ul className='challenges'>
                    {this.state.challenges.map(challenge => 
                        <Challenge
                            key={challenge.id}
                            challenge={challenge}
                        />
                    )}
                </ul>
            </>
            
        );
    }
}

export default Challenges;
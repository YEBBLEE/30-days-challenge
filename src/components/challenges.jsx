import React, { Component } from 'react';
import Challenge from './Challenge';
import InputForm from './InputForm';
import ProgressCount from './ProgressCount';

class Challenges extends Component {

    state = {
        challenges : []
    }

    challengeService = this.props.challengeService;

    componentDidMount() {
        console.log(`[Challenges] DidMount!! : ${this.props.user}`);
        if (!this.props.user) { return }
        this.challengeService
            .getChallenges(this.props.user.nickname)
            .then(result => {
                this.setState({challenges: result});
            })            
            .catch(error => console.log('error', error));  
    }

    handleStart = (title) => {
        this.challengeService
            .postChallenge(title,this.props.user.nickname)
            .then(result => {
                const challenge = result;
                const challenges = [challenge, ...this.state.challenges];
                this.setState({challenges});
            })            
            .catch((err) => console.log('error',err));
    }

    handleDelete = (challenge) => {
        const challengeId = challenge.id;
        this.challengeService
            .deleteChallenge(challengeId)
            .then(() => {
                const challenges = this.state.challenges.filter(challenge => challenge.id !== challengeId );
                this.setState({challenges});
            })
            .catch(error => console.log('error', error));
    }
    
    handleModify = (title,challenge) => {
        const challengeId = challenge.id;
        const nickname = this.props.user.nickname;
        this.challengeService
            .updateChallengeTitle(nickname,title,challengeId)
            .then((result) => {
                const modified = result;
                let challenges = [...this.state.challenges];
                challenges.splice(challenges.indexOf(challenge),1,modified);
                this.setState({challenges});
            })
            .catch((err) => console.log('error',err));
    }

    handleNumber = (challenge,days,isChecked,number) => {
        const daysId = days.id;
        this.challengeService
            .updateChallengeNumber(daysId, number, isChecked)
            .then((result) => {
                let challenges = [...this.state.challenges];
                const chIdx = challenges.indexOf(challenge);
                const modifiedChallenge = result;
                challenges.splice(chIdx,1,modifiedChallenge);
                this.setState({challenges});
            })
            .catch(error => console.log('error', error));
    }

    render() {
        return (
        <>
        {this.props.user && (
            <>
            <ProgressCount 
            countNumber={this.state.challenges.filter(challenge => challenge.isProgress).length}
            />
            <InputForm
                onStart = {this.handleStart}
            />
            <ul className='challenges'>
                {this.state.challenges.map(challenge => 
                    <Challenge
                        key={challenge.id}
                        challenge={challenge}
                        onDelete={this.handleDelete}
                        onModify={this.handleModify}
                        onNumberClicked={this.handleNumber}
                    />
                )}
            </ul>
            </>
        )}
        </>
        );
    }
}

export default Challenges;
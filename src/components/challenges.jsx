import React, { PureComponent } from 'react';
import Challenge from './Challenge';
import InputForm from './InputForm';
import ModalAlert from './ModalAlert';
import ProgressCount from './ProgressCount';

class Challenges extends PureComponent {

    state = {
        challenges : [],
        text : '',
        isAlert : false,
    }

    challengeService = this.props.challengeService;

    componentDidMount() {
        if (!this.props.user) { return }
        this.challengeService
            .getChallenges(this.props.user.nickname)
            .then(result => {
                this.setState({challenges: result});
            })            
            .catch(error => console.log('error', error));  
    }

    handleModalClose = () => {
        this.setState({text:'',isAlert:false});
    }

    handlModalOpen = (text) => {
        this.setState({text, isAlert : true});
    }

    handleStart = (title) => {
        this.challengeService
            .postChallenge(title,this.props.user.nickname)
            .then(result => {
                const challenge = result;
                const challenges = [challenge, ...this.state.challenges];
                this.setState({challenges});
            })
            .catch((error) => {
                const text = error.message.toString();
                this.handlModalOpen(text);
            });            
    }

    handleDelete = (challenge) => {
        const challengeId = challenge.id;
        const daysId = challenge.daysInfo.id;
        this.challengeService
            .deleteChallenge(challengeId,daysId)
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
                const updatedChallenges = this.state.challenges.map((challenge) => (
                    challenge.id === result.id ? result : challenge));
                this.setState({challenges: updatedChallenges});
            })
            .catch((error) => {
                const text = error.message.toString();
                this.handlModalOpen(text);
            });
    }

    handleNumber = (challenge,daysInfo,isChecked,number) => {
        const chId = challenge.id;
        const daysId = daysInfo.id;
        this.challengeService
            .updateChallengeNumber(daysId, number, isChecked,chId)
            .then((result) => {
                const updatedChallenges = this.state.challenges.map((challenge) => (
                    challenge.id === result.id ? result : challenge));
                this.setState({challenges: updatedChallenges});
            })
            .catch(error => console.log('error', error));
    }

    render() {
        return (
        <>
        {this.props.user && (
            <>
            {this.state.text && (
                <ModalAlert
                    text={this.state.text}
                    isAlert={this.state.isAlert}
                    onClose={this.handleModalClose}/>
            )}
            <ProgressCount 
            countNumber={this.state.challenges.filter(challenge => challenge.isProgress).length}
            />
            <InputForm
                onStart = {this.handleStart}
            />
            <ul className='challenges'>
                {this.state.challenges.length > 0 && this.state.challenges.map(challenge => 
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
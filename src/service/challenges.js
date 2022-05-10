export default class ChallengeService {
  constructor(http) {
    this.http = http;
  }

  async getChallenges(nickname) {
    const query = nickname ? `?nickname=${nickname}` : '';
    const reqOptions = {
      method: 'GET',
    };
    return this.http.sendRequest(`/challenges${query}`,reqOptions);
  }

  async postChallenge(title, nickname) {
    const reqOptions = {
      method: 'POST',
      body: JSON.stringify({
        title,
        nickname
      })
    };
    return this.http.sendRequest('/challenges',reqOptions);
  }

  async deleteChallenge(challengeId) {
    return this.http.sendRequest(`/challenges/${challengeId}`,{
      method: 'DELETE'
    });
  }

  async updateChallengeTitle(nickname,title,challengeId) {
    return this.http.sendRequest(`/challenges/${challengeId}`,
        { 
          method: 'PUT',
          body: JSON.stringify({title, nickname})
        });
  }

  async updateChallengeNumber(daysId, number, isChecked) {
    return this.http.sendRequest(`/challenges/days/${daysId}`,
      {
        method: 'PUT',
        body : JSON.stringify({number, isChecked})
      }
    );
  }
}
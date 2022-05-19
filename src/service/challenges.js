export default class ChallengeService {
  constructor(http) {
    this.http = http;
  }

  async getChallenges(nickname) {
    const query = nickname ? `?nickname=${nickname}` : '';
    const reqOptions = {
      method: 'GET',
      headers: this.getHeaders(),
    };
    return this.http.sendRequest(`/challenges${query}`,reqOptions);
  }

  async postChallenge(title, nickname) {
    const reqOptions = {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({
        title,
        nickname
      })
    };
    return this.http.sendRequest('/challenges',reqOptions);
  }

  async deleteChallenge(challengeId,daysId) {
    return this.http.sendRequest(`/challenges/${challengeId}`,{
      method: 'DELETE',
      headers: this.getHeaders(),
      body: JSON.stringify({
        daysId
      })
    });
  }

  async updateChallengeTitle(nickname,title,challengeId) {
    return this.http.sendRequest(`/challenges/${challengeId}`,
        { 
          method: 'PUT',
          headers: this.getHeaders(),
          body: JSON.stringify({title, nickname})
        });
  }

  async updateChallengeNumber(daysId, number, isChecked,chId) {
    return this.http.sendRequest(`/challenges/days/${daysId}`,
      {
        method: 'PUT',
        headers: this.getHeaders(),
        body : JSON.stringify({number, isChecked,chId})
      }
    );
  }
  
  getHeaders() {
    const token = window.localStorage.getItem('token');
    return {
      Authorization: `Bearer ${token}`,
    };
  }

}


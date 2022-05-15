export default class AuthService {
  constructor(http) {
    this.http = http;
  }

  //회원가입 요청
  async signup(nickname, password, email, url) {
    const reqOptions = {
      method: 'POST',
      body: JSON.stringify({nickname, password, email, url})
    };
    const result = await this.http.sendRequest('/auth/signup',reqOptions);
    window.localStorage.setItem('token', result.token);
    return result;
  }

  //로그인 요청
  async login(nickname, password) {
    const reqOptions = {
      method: 'POST',
      body: JSON.stringify({ nickname, password })
    };
    const result = await this.http.sendRequest('/auth/login',reqOptions);
    window.localStorage.setItem('token',result.token);
    return result;
  }

  //로그아웃
  async logout() {
    window.localStorage.clear('token');
  }
}
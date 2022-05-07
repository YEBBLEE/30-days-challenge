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
    const result = this.http.sendRequest('/auth/signup',reqOptions);
    result
        .then((result) => {
          console.log(result);
          //토큰 저장
          window.localStorage.setItem('token',result.token);
        })
        .catch(error => console.log('error', error));
  }

  //로그인 요청
  async login(nickname, password) {
    const reqOptions = {
      method: 'POST',
      body: JSON.stringify({ nickname, password })
    };
    const result = this.http.sendRequest('/auth/login',reqOptions);
    result
    .then((result) => {
      console.log(result);
      //토큰 저장
      window.localStorage.setItem('token',result.token);
    })
    .catch(error => console.log('error', error));
  }

  //todo : 로그아웃 요청
}
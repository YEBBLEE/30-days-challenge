export default class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async sendRequest(url, options) {
    const reqOptions = {
      ...options,
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      }
    };

    const response = await fetch(`${this.baseUrl}${url}`,reqOptions);
    let result;
    try {
      result = await response.json();
    } catch (error) {
      /**
      SyntaxError: Unexpected end of JSON input
      at HttpClient.sendRequest (http.js:19:1)
       */
      console.error(error);
    }

    if(response.status > 299 || response.status < 200 ) {
      const msg = result && result.message ? result.message : 'Something Wrong!';
      const error = new Error(msg);
      throw error;
    }
    return result;
  }
}
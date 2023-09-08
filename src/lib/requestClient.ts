import axios from 'axios';

export class RequestClient {
  private readonly url: string;
  private readonly token: string;

  constructor(url: string, token: string) {
    this.url = url;
    this.token = token;
  }

  // Client Declaration
  public readonly requestClient = async (method, data) => {
    return axios({
      url: `${this.url}`,
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      },
      data,
    });
  }
}
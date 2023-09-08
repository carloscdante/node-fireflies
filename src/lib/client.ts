import { TranscriptRequest, TranscriptsRequest, UserRequest } from './../types/namespaces';
import { convertUserToClient, removeEmpty } from './../util/helpers';
import axios from 'axios';
import { Transcript, UserRawResponse, UserResponse } from '../types/namespaces';

export class FirefliesClient {
  private readonly token: string;

  constructor(token: string) {
    this.token = token;
  }

  private readonly baseUrl = 'https://api.fireflies.ai/graphql';

  // Client Declaration
  private readonly requestClient = async (method, data) => {
    return axios({
      url: `${this.baseUrl}`,
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      },
      data,
    });
  }

  // General Queries (query op)
  public async getUserData(request: UserRequest): Promise<UserResponse> {
    try {
      const response = await this.requestClient('post', {
        query: `
          query {
              user${request.id ? `id:${request.id}` : '(id:"")'}{
                ${request.filter.join(' ')}
              }
            }
        `
      });

      const user: UserResponse = convertUserToClient(response.data.data.user as UserRawResponse);
      return removeEmpty(user) as UserResponse;
    } catch (error) {
      console.error('An error occurred while trying to fetch the user information:', error);
      return {} as UserResponse;
    }
  }

  public async fetchWorkspaceUsers(request: UserRequest): Promise<UserResponse[]> {
    try {
      const response = await this.requestClient('post', {
        query: `
          query {
              users {
                ${request.filter.join(' ')}
              }
            }
        `
      });

      const users = response.data.data.users
      const userClientMapper = users.map((user: UserRawResponse) => removeEmpty(convertUserToClient(user)));
      return userClientMapper as UserResponse[];
    } catch (error) {
      console.error('An error occurred while trying to fetch users information:', error);
      return [] as UserResponse[];
    }
  }

  public async getTranscript(request: TranscriptRequest): Promise<Transcript> {
    try {
      const response = await this.requestClient('post', {
        query: `
          query {
              transcript(id:"${request.id}") {
                ${request.filter.join(' ')}
              }
            }
        `
      });

      const transcript: Transcript = response.data.data.transcript;
      return transcript;
    } catch (error) {
      console.error('An error occurred while trying to fetch transcript:', error);
      return {} as Transcript;
    }
  }

  public async getTranscripts(request: TranscriptsRequest): Promise<Transcript[]> {
    try {
      const response = await this.requestClient('post', {
        query: `
          query {
              transcripts {
                ${request.filter.join(' ')}
              }
            }
        `
      });

      const transcripts = response.data.data.transcripts
      return transcripts as Transcript[];
    } catch (error) {
      console.error('An error occurred while trying to fetch users information:', error);
      return [] as Transcript[];
    }
  }
}
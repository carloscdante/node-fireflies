import { TranscriptRequest, TranscriptsRequest, UserRequest, UserRoleRequest } from './../types/namespaces';
import { convertUserToClient, removeEmpty } from './../util/helpers';
import { Transcript, UserRawResponse, UserResponse } from '../types/namespaces';
import { RequestClient } from './requestClient';

export class FirefliesClient extends RequestClient {
  constructor(token: string, url: string = 'https://api.fireflies.ai/graphql') {
    super(url, token);
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

  // Mutations
  public async setUserRole(request: UserRoleRequest): Promise<UserResponse> {
    const user_id = request.userId;
    const role = request.role;
    try {
      const response = await this.requestClient('post', {
        query: `
        mutation($user_id: String!, $role: Role!) {
          setUserRole(user_id: $user_id, role:$role) {
            ${request.filter.join(' ')}
          }
        }
      `,
      variables: { user_id, role }
      });
      return response.data.data.setUserRole as UserResponse;
    } catch (error) {
      throw new Error(`An error occurred while trying to change role for user ID ${user_id}: ${error}`)
    }
  }
}
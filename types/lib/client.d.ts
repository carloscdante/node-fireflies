import { TranscriptRequest, TranscriptsRequest, UserRequest, UserRoleRequest } from './../types/namespaces';
import { Transcript, UserResponse } from '../types/namespaces';
import { RequestClient } from './requestClient';
export declare class FirefliesClient extends RequestClient {
    constructor(token: string, url?: string);
    getUserData(request: UserRequest): Promise<UserResponse>;
    fetchWorkspaceUsers(request: UserRequest): Promise<UserResponse[]>;
    getTranscript(request: TranscriptRequest): Promise<Transcript>;
    getTranscripts(request: TranscriptsRequest): Promise<Transcript[]>;
    setUserRole(request: UserRoleRequest): Promise<UserResponse>;
}
//# sourceMappingURL=client.d.ts.map
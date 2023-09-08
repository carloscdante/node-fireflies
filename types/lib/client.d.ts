import { TranscriptRequest, TranscriptsRequest, UserRequest } from './../types/namespaces';
import { Transcript, UserResponse } from '../types/namespaces';
export declare class FirefliesClient {
    private readonly token;
    constructor(token: string);
    private readonly baseUrl;
    private readonly requestClient;
    getUserData(request: UserRequest): Promise<UserResponse>;
    fetchWorkspaceUsers(request: UserRequest): Promise<UserResponse[]>;
    getTranscript(request: TranscriptRequest): Promise<Transcript>;
    getTranscripts(request: TranscriptsRequest): Promise<Transcript[]>;
}
//# sourceMappingURL=client.d.ts.map
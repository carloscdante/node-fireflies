export declare class RequestClient {
    private readonly url;
    private readonly token;
    constructor(url: string, token: string);
    readonly requestClient: (method: any, data: any) => Promise<import("axios").AxiosResponse<any, any>>;
}
//# sourceMappingURL=requestClient.d.ts.map
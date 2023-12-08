import { Environment } from 'src/app/shared/environments/Environment';
import { GetDifficultyResponse } from '../models/parameters/GetDifficultyResponse.model';
import { GetMiningInfoResponse } from '../models/parameters/GetMiningInfoResponse.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DigiByteNodeService {
    private apiUrl = Environment.API_URL + '/DigiByteNode';

    constructor(protected http: HttpClient) { }

    getBlockCount(): Observable<number> {
        return this.http.get<number>(`${this.apiUrl}/getblockcount`);
    }

    getDifficulty(): Observable<GetDifficultyResponse> {
        return this.http.get<GetDifficultyResponse>(`${this.apiUrl}/getdifficulty`);
    }

    getIpAddresses(): Observable<string[]> {
        return this.http.get<string[]>(`${this.apiUrl}/getipaddresses`);
    }

    getMiningInfo(): Observable<GetMiningInfoResponse> {
        return this.http.get<GetMiningInfoResponse>(`${this.apiUrl}/getmininginfo`);
    }
}
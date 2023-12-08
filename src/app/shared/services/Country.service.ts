import { Country } from '../models/Country.model';
import { Environment } from 'src/app/shared/environments/Environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CountryService {
    private apiUrl = Environment.API_URL + '/Country';

    constructor(protected http: HttpClient) { }

    getList(): Observable<Country[]> {
        return this.http.get<Country[]>(this.apiUrl);
    }

    getById(id: string): Observable<Country> {
        return this.http.get<Country>(`${this.apiUrl}/${id}`);
    }
}
import { Currency } from 'src/app/shared/models/Currency.model';
import { Environment } from 'src/app/shared/environments/Environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CurrencyService {
    private apiUrl = Environment.API_URL + '/Currency';

    constructor(protected http: HttpClient) { }

    getList(): Observable<Currency[]> {
        return this.http.get<Currency[]>(this.apiUrl);
    }

    getById(id: string): Observable<Currency> {
        return this.http.get<Currency>(`${this.apiUrl}/${id}`);
    }
}
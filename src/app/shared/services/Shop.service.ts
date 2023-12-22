import { Environment } from 'src/app/shared/environments/Environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicShop } from '../models/viewmodels/PublicShop.model';

@Injectable()
export class ShopService {
    private apiUrl = Environment.API_URL + '/Shop/public';

    constructor(protected http: HttpClient) { }

    getByIdPublic(id: string): Observable<PublicShop> {
        return this.http.get<PublicShop>(`${this.apiUrl}/${id}`);
    }

    getBySubdomainPublic(subDomain: string): Observable<PublicShop> {
        return this.http.get<PublicShop>(`${this.apiUrl}/GetBySubDomain/${subDomain}`);
    }
}
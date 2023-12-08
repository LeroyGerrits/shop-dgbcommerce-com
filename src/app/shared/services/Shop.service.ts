import { HttpClient, HttpParams } from '@angular/common/http';

import { Environment } from 'src/app/shared/environments/Environment';
import { Injectable } from '@angular/core';
import { MutationResult } from 'src/app/shared/models/MutationResult';
import { Observable } from 'rxjs';
import { PublicShop } from '../models/viewmodels/PublicShop.model';
import { Shop } from 'src/app/shared/models/Shop.model';

@Injectable()
export class ShopService {
    private apiUrl = Environment.API_URL + '/Shop';

    constructor(protected http: HttpClient) { }

    getById(id: string): Observable<Shop> {
        return this.http.get<Shop>(`${this.apiUrl}/${id}`);
    }
}
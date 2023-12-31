import { Environment } from 'src/app/shared/environments/Environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicCategory } from '../models/viewmodels/PublicCategory.model';

@Injectable()
export class CategoryService {
    private apiUrl = Environment.API_URL + '/Category/public';

    constructor(protected http: HttpClient) { }

    getByShopIdPublic(shopId: string): Observable<PublicCategory[]> {
        return this.http.get<PublicCategory[]>(`${this.apiUrl}/GetByShopId/${shopId}`);
    }
}
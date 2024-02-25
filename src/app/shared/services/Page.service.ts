import { Environment } from 'src/app/shared/environments/Environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicPage } from '../models/viewmodels/PublicPage.model';

@Injectable()
export class PageService {
    private apiUrl = Environment.API_URL + '/Page/public';

    constructor(protected http: HttpClient) { }

    getByShopIdPublic(shopId: string): Observable<PublicPage[]> {
        return this.http.get<PublicPage[]>(`${this.apiUrl}/GetByShopId/${shopId}`);
    }
}
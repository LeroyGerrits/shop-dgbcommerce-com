import { HttpClient, HttpParams } from '@angular/common/http';

import { Environment } from 'src/app/shared/environments/Environment';
import { GetProductsParameters } from '../models/parameters/GetProductsParameters.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicProduct } from '../models/viewmodels/PublicProduct.model';

@Injectable()
export class ProductService {
    private apiUrl = Environment.API_URL + '/Product/public';

    constructor(protected http: HttpClient) { }

    getList(parameters?: GetProductsParameters): Observable<PublicProduct[]> {
        let httpParams = new HttpParams();

        if (parameters) {
            if (parameters.Name) httpParams = httpParams.append('name', parameters.Name);
            if (parameters.ShopId) httpParams = httpParams.append('shopId', parameters.ShopId);
            if (parameters.CategoryId) httpParams = httpParams.append('categoryId', parameters.CategoryId);
            if (parameters.ShowOnHome != null) httpParams = httpParams.append('showOnHome', parameters.ShowOnHome);
        }

        return this.http.get<PublicProduct[]>(this.apiUrl, { params: httpParams });
    }

    getById(id: string): Observable<PublicProduct> {
        return this.http.get<PublicProduct>(`${this.apiUrl}/${id}`);
    }
}
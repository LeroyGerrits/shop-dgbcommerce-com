import { HttpClient, HttpParams } from '@angular/common/http';

import { Environment } from 'src/app/shared/environments/Environment';
import { GetProductResponse } from '../models/response/GetProductResponse.model';
import { GetProductsParameters } from '../models/parameters/GetProductsParameters.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/Product.model';

@Injectable()
export class ProductService {
    private apiUrl = Environment.API_URL + '/Product';

    constructor(protected http: HttpClient) { }

    getList(parameters?: GetProductsParameters): Observable<Product[]> {
        let httpParams = new HttpParams();

        if (parameters) {
            if (parameters.Name) httpParams = httpParams.append('name', parameters.Name);
            if (parameters.ShopId) httpParams = httpParams.append('shopId', parameters.ShopId);
        }

        return this.http.get<Product[]>(this.apiUrl, { params: httpParams });
    }

    getById(id: string): Observable<GetProductResponse> {
        return this.http.get<GetProductResponse>(`${this.apiUrl}/${id}`);
    }
}
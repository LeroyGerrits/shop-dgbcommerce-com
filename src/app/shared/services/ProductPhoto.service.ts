import { HttpClient, HttpParams } from '@angular/common/http';

import { Environment } from 'src/app/shared/environments/Environment';
import { GetProductPhotosParameters } from '../models/parameters/GetProductPhotosParameters.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductPhoto } from '../models/ProductPhoto.model';

@Injectable()
export class ProductPhotoService {
    private apiUrl = Environment.API_URL + '/ProductPhoto';

    constructor(protected http: HttpClient) { }

    getList(parameters?: GetProductPhotosParameters): Observable<ProductPhoto[]> {
        let httpParams = new HttpParams();

        if (parameters) {
            if (parameters.ProductId) httpParams = httpParams.append('productId', parameters.ProductId);
        }

        return this.http.get<ProductPhoto[]>(this.apiUrl, { params: httpParams });
    }
}
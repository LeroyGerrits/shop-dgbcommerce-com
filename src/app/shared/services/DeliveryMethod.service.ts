import { HttpClient, HttpParams } from '@angular/common/http';

import { DeliveryMethod } from 'src/app/shared/models/DeliveryMethod.model';
import { Environment } from 'src/app/shared/environments/Environment';
import { GetDeliveryMethodsParameters } from '../models/parameters/GetDeliveryMethodsParameters.model';
import { Injectable } from '@angular/core';
import { MutationResult } from 'src/app/shared/models/MutationResult';
import { Observable } from 'rxjs';

@Injectable()
export class DeliveryMethodService {
    private apiUrl = Environment.API_URL + '/DeliveryMethod';

    constructor(protected http: HttpClient) { }

    getList(parameters?: GetDeliveryMethodsParameters): Observable<DeliveryMethod[]> {
        let httpParams = new HttpParams();

        if (parameters) {
            if (parameters.Name) httpParams = httpParams.append('name', parameters.Name);
            if (parameters.ShopId) httpParams = httpParams.append('shopId', parameters.ShopId);
        }

        return this.http.get<DeliveryMethod[]>(this.apiUrl, { params: httpParams });
    }

    getById(id: string): Observable<DeliveryMethod> {
        return this.http.get<DeliveryMethod>(`${this.apiUrl}/${id}`);
    }

    create(deliveryMethod: DeliveryMethod): Observable<MutationResult> {
        return this.http.post<MutationResult>(this.apiUrl, deliveryMethod);
    }

    update(deliveryMethod: DeliveryMethod): Observable<MutationResult> {
        return this.http.put<MutationResult>(`${this.apiUrl}/${deliveryMethod.Id}`, deliveryMethod)
    }

    delete(id: string): Observable<MutationResult> {
        return this.http.delete<MutationResult>(`${this.apiUrl}/${id}`);
    }
}
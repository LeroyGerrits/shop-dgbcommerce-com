import { HttpClient, HttpParams } from '@angular/common/http';

import { Category } from 'src/app/shared/models/Category.model';
import { Environment } from 'src/app/shared/environments/Environment';
import { GetCategoriesParameters } from '../models/parameters/GetCategoriesParameters.model';
import { Injectable } from '@angular/core';
import { MutationResult } from 'src/app/shared/models/MutationResult';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {
    private apiUrl = Environment.API_URL + '/Category';

    constructor(protected http: HttpClient) { }

    getList(parameters?: GetCategoriesParameters): Observable<Category[]> {
        let httpParams = new HttpParams();

        if (parameters) {
            if (parameters.ShopId) httpParams = httpParams.append('shopId', parameters.ShopId);
            if (parameters.ParentId) httpParams = httpParams.append('parentId', parameters.ParentId);
            if (parameters.Name) httpParams = httpParams.append('name', parameters.Name);
        }

        return this.http.get<Category[]>(this.apiUrl, { params: httpParams });
    }

    getById(id: string): Observable<Category> {
        return this.http.get<Category>(`${this.apiUrl}/${id}`);
    }

    create(category: Category): Observable<MutationResult> {
        return this.http.post<MutationResult>(this.apiUrl, category);
    }

    update(category: Category): Observable<MutationResult> {
        return this.http.put<MutationResult>(`${this.apiUrl}/${category.Id}`, category)
    }

    changeParent(id: string, parentId: string): Observable<MutationResult> {
        return this.http.put<MutationResult>(`${this.apiUrl}/${id}/ChangeParent/${parentId}`, null)
    }

    moveDown(id: string): Observable<MutationResult> {
        return this.http.put<MutationResult>(`${this.apiUrl}/${id}/Down`, null)
    }

    moveUp(id: string): Observable<MutationResult> {
        return this.http.put<MutationResult>(`${this.apiUrl}/${id}/Up`, null)
    }
    
    delete(id: string): Observable<MutationResult> {
        return this.http.delete<MutationResult>(`${this.apiUrl}/${id}`);
    }
}
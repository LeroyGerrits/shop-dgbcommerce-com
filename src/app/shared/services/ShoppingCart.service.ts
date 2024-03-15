import { CookieService } from 'ngx-cookie-service';
import { Environment } from 'src/app/shared/environments/Environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MutationResult } from '../models/MutationResult';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/ShoppingCart.model';
import { ShoppingCartItem } from '../models/ShoppingCartItem.model';

@Injectable()
export class ShoppingCartService {
    private apiUrl = `${Environment.API_URL}/ShoppingCart/public`;

    constructor(
        private cookieService: CookieService,
        protected http: HttpClient
    ) { }

    get(): Observable<ShoppingCart> {
        return this.http.get<ShoppingCart>(`${this.apiUrl}/${this.getOrCreateSessionId()}`);
    }

    addItem(shoppingCartItem: ShoppingCartItem): Observable<MutationResult> {
        return this.http.post<MutationResult>(`${this.apiUrl}/AddItem`, shoppingCartItem);
    }

    updateItem(shoppingCartItem: ShoppingCartItem): Observable<MutationResult> {
        return this.http.put<MutationResult>(`${this.apiUrl}/${shoppingCartItem.Id}`, shoppingCartItem)
    }

    deleteItem(id: string): Observable<MutationResult> {
        return this.http.delete<MutationResult>(`${this.apiUrl}/DeleteItem/${id}`);
    }

    clearSessionId(): void {
        this.cookieService.delete('sessionId', '/');
    }

    getSessionId(): string {
        return this.cookieService.get('sessionId');
    }

    getOrCreateSessionId(): string {
        let sessionId = this.cookieService.get('sessionId');

        if (!sessionId) {
            const newSessionId = crypto.randomUUID();
            this.cookieService.set('sessionId', newSessionId, { path: '/' });
            sessionId = newSessionId;
        }

        return sessionId;
    }
}
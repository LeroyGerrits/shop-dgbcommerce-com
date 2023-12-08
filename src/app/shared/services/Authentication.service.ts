import { BehaviorSubject, Observable } from 'rxjs';

import { AuthenticatedMerchant } from 'src/app/shared/models/AuthenticatedMerchant.model';
import { Environment } from 'src/app/shared/environments/Environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private authenticatedMerchantSubject: BehaviorSubject<AuthenticatedMerchant | null>;
    public merchant: Observable<AuthenticatedMerchant | null>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.authenticatedMerchantSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('merchant')!));
        this.merchant = this.authenticatedMerchantSubject.asObservable();
    }

    get authenticatedMerchant() {
        return this.authenticatedMerchantSubject.value;
    }

    login(emailAddress: string, password: string) {
        return this.http.post<any>(Environment.API_URL + '/Merchant/Authenticate', { emailAddress, password })
            .pipe(map(merchant => {
                localStorage.setItem('merchant', JSON.stringify(merchant));
                this.authenticatedMerchantSubject.next(merchant);
                return merchant;
            }));
    }

    logout() {
        localStorage.removeItem('merchant');
        this.authenticatedMerchantSubject.next(null);
        this.router.navigate(['/']);
    }
}
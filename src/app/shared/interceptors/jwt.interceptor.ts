import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { AuthenticationService } from 'src/app/shared/services/Authentication.service';
import { Environment } from 'src/app/shared/environments/Environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authenticatedMerchant = this.authenticationService.authenticatedMerchant;
        const isLoggedIn = authenticatedMerchant?.Token;
        const isApiUrl = request.url.startsWith(Environment.API_URL);
        
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${authenticatedMerchant.Token}`
                }
            });
        }

        return next.handle(request);
    }
}
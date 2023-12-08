import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable, inject } from '@angular/core';

import { AuthenticationService } from 'src/app/shared/services/Authentication.service';

@Injectable({ providedIn: 'root' })
class MerchantAuthorizedGuardService {
    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const merchant = this.authenticationService.authenticatedMerchant;
        if (merchant) {
            return true;
        }

        this.router.navigate(['/not-authorized'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}

export const MerchantAuthorizedGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(MerchantAuthorizedGuardService).canActivate(next, state);
}
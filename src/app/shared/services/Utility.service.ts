import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicCategory } from '../models/viewmodels/PublicCategory.model';
import { PublicShop } from '../models/viewmodels/PublicShop.model';

@Injectable()
export class UtilityService {
    public categories: PublicCategory[] | undefined;
    public shop: PublicShop | undefined;
}
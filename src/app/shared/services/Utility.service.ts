import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { PublicCategory } from '../models/viewmodels/PublicCategory.model';
import { PublicShop } from '../models/viewmodels/PublicShop.model';
import { Shop } from '../models/Shop.model';

@Injectable()
export class UtilityService {
    private categories$ = new BehaviorSubject<any>({});
    private shop$ = new BehaviorSubject<any>({});

    public activeCategories$ = this.categories$.asObservable();
    public activeShop$ = this.shop$.asObservable();

    public setCategories(categories: PublicCategory[]) {
        this.categories$.next(categories);
    }

    public setShop(shop: PublicShop) {
        this.shop$.next(shop);
    }
}
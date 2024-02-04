import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { PublicCategory } from '../models/viewmodels/PublicCategory.model';
import { PublicShop } from '../models/viewmodels/PublicShop.model';

@Injectable()
export class UtilityService {
    private categories$ = new BehaviorSubject<any>({});
    private shop$ = new BehaviorSubject<any>({});

    public activeCategories$ = this.categories$.asObservable();
    public activeShop$ = this.shop$.asObservable();

    public getCategoryById(id: string): any {
        let foundCategory: any;
        this.categories$.subscribe(categories => foundCategory = this.getCategoryRecursive(id, categories))
        return foundCategory;
    }

    public setCategories(categories: PublicCategory[]) {
        this.categories$.next(categories);
    }

    public setShop(shop: PublicShop) {
        this.shop$.next(shop);
    }

    private getCategoryRecursive(id: string, categories: PublicCategory[]): any {
        for (const category of categories) {
            if (category.Id === id) return category;
            if (category.Children) {
                const child = this.getCategoryRecursive(id, category.Children);
                if (child) return child;
            }
        }
    }
}
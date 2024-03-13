import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { PublicCategory } from '../models/viewmodels/PublicCategory.model';
import { PublicPage } from '../models/viewmodels/PublicPage.model';
import { PublicShop } from '../models/viewmodels/PublicShop.model';
import { ShoppingCart } from '../models/ShoppingCart.model';
import { ShoppingCartService } from './ShoppingCart.service';

@Injectable()
export class UtilityService {
    private categories$ = new BehaviorSubject<any>({});
    private pages$ = new BehaviorSubject<any>({});
    private shop$ = new BehaviorSubject<any>({});
    private shoppingCart$ = new BehaviorSubject<any>({});

    public activeCategories$ = this.categories$.asObservable();
    public activePages$ = this.pages$.asObservable();
    public activeShop$ = this.shop$.asObservable();
    public activeShoppingCart$ = this.shoppingCart$.asObservable();

    constructor(private shoppingCartService: ShoppingCartService) { }

    public getCategoryById(id: string): any {
        let foundCategory: any;
        this.categories$.subscribe(categories => foundCategory = this.getCategoryRecursive(id, categories))
        return foundCategory;
    }

    public getPageById(id: string): any {
        let foundPage: any;
        this.pages$.subscribe(pages => {
            let foundPages = (<PublicPage[]>pages).filter(page => page.Id == id);
            if (foundPages.length == 1)
                foundPage = foundPages[0];
        });
        return foundPage;
    }

    public updateShoppingCart() {
        const sessionId = this.shoppingCartService.getSessionId();
        if (sessionId) {
            console.log('Retrieving shopping cart');
            this.shoppingCartService.get().subscribe(shoppingCart => {
                console.log('shopping cart retrieved');
                if (shoppingCart) {
                    console.log('Shopping cart enabled!');
                    this.shoppingCart$.next(shoppingCart);
                }
            });
        }
    }

    public setCategories(categories: PublicCategory[]) {
        this.categories$.next(categories);
    }

    public setPages(pages: PublicPage[]) {
        this.pages$.next(pages);
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
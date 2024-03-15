import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';

import { CategoryService } from './shared/services/Category.service';
import { Constants } from './shared/Constants';
import { Customer } from './shared/models/Customer.model';
import { MatDialog } from '@angular/material/dialog';
import { PageService } from './shared/services/Page.service';
import { PublicCategory } from './shared/models/viewmodels/PublicCategory.model';
import { PublicPage } from './shared/models/viewmodels/PublicPage.model';
import { PublicShop } from './shared/models/viewmodels/PublicShop.model';
import { SearchEngineFriendlyStringPipe } from './shared/pipes/SearchEngineFriendlyString.pipe';
import { ShopService } from './shared/services/Shop.service';
import { ShoppingCart } from './shared/models/ShoppingCart.model';
import { ShoppingCartService } from './shared/services/ShoppingCart.service';
import { UtilityService } from './shared/services/Utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  public constants = Constants;

  public activeCustomer?: Customer | null;
  public categories: PublicCategory[] | undefined;
  public currentYear: number = new Date().getFullYear();
  public pages: PublicPage[] | undefined;
  public pagesFooter: PublicPage[] = [];
  public pagesHeader: PublicPage[] = [];
  public pagesTopBar: PublicPage[] = [];
  public snackBarRef: MatSnackBarRef<TextOnlySnackBar> | undefined;
  public shop: PublicShop | undefined;
  public shoppingCart: ShoppingCart | undefined;
  public shoppingCartCount = 0;

  constructor(
    private dialog: MatDialog,
    private categoryService: CategoryService,
    private pageService: PageService,
    public searchEngineFriendlyStringPipe: SearchEngineFriendlyStringPipe,
    private shopService: ShopService,
    private snackBar: MatSnackBar,
    private utilityService: UtilityService
  ) { }

  ngOnInit(): void {
    const domain = window.location.hostname;
    const subDomain = domain.replace(`.${this.constants.DGB_COMMERCE_DOMAIN}`, '');

    this.shopService.getBySubdomainPublic(subDomain).subscribe({
      next: shop => this.onRetrieveShop(shop),
      error: () => { }
    });

    console.log('App Component Init');
    
    this.utilityService.activeShoppingCart$.subscribe(shoppingCart => this.shoppingCart = shoppingCart);
    this.utilityService.updateShoppingCart();
  }

  onRetrieveShop(shop: PublicShop) {
    this.shop = shop;
    this.utilityService.setShop(shop);

    this.categoryService.getByShopIdPublic(shop.Id).subscribe({
      next: categories => this.onRetrieveCategories(categories),
      error: error => this.snackBarRef = this.snackBar.open(error, 'Close', { panelClass: ['error-snackbar'] })
    });

    this.pageService.getByShopIdPublic(shop.Id).subscribe({
      next: pages => this.onRetrievePages(pages),
      error: error => this.snackBarRef = this.snackBar.open(error, 'Close', { panelClass: ['error-snackbar'] })
    });
  }

  onRetrieveCategories(categories: PublicCategory[]) {
    this.categories = categories;
    this.utilityService.setCategories(categories);
  }

  onRetrievePages(pages: PublicPage[]) {
    this.pages = pages;
    this.utilityService.setPages(pages);

    this.pagesFooter = pages.filter(page => page.CategoryIds?.includes(Constants.PAGE_CATEGORY_ID_FOOTER));
    this.pagesHeader = pages.filter(page => page.CategoryIds?.includes(Constants.PAGE_CATEGORY_ID_HEADER));
    this.pagesTopBar = pages.filter(page => page.CategoryIds?.includes(Constants.PAGE_CATEGORY_ID_TOP_BAR));
  }

  login() {

  }

  logout() {

  }

  signUp() {

  }
}
import { Component, OnInit, Output } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';

import { CategoryService } from './shared/services/Category.service';
import { Constants } from './shared/Constants';
import { Customer } from './shared/models/Customer.model';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PublicCategory } from './shared/models/viewmodels/PublicCategory.model';
import { PublicShop } from './shared/models/viewmodels/PublicShop.model';
import { SearchEngineFriendlyStringPipe } from './shared/pipes/SearchEngineFriendlyString.pipe';
import { ShopService } from './shared/services/Shop.service';
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
  public snackBarRef: MatSnackBarRef<TextOnlySnackBar> | undefined;
  public shop: PublicShop | undefined;

  constructor(
    private dialog: MatDialog,
    private categoryService: CategoryService,
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
  }

  onRetrieveShop(shop: PublicShop) {
    this.shop = shop;
    this.utilityService.shop = shop;

    this.categoryService.getByShopIdPublic(shop.Id).subscribe({
      next: categories => this.onRetrieveCategories(categories),
      error: error => this.snackBarRef = this.snackBar.open(error, 'Close', { panelClass: ['error-snackbar'] })
    });
  }

  onRetrieveCategories(categories: PublicCategory[]) {
    this.categories = categories;
    this.utilityService.categories = categories;
  }

  login() {

  }

  logout() {

  }

  signUp() {

  }
}
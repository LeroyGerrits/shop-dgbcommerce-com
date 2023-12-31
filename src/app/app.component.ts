import { Component, OnInit, Output } from '@angular/core';

import { CategoryService } from './shared/services/Category.service';
import { Constants } from './shared/Constants';
import { MatDialog } from '@angular/material/dialog';
import { PublicCategory } from './shared/models/viewmodels/PublicCategory.model';
import { PublicShop } from './shared/models/viewmodels/PublicShop.model';
import { SearchEngineFriendlyStringPipe } from './shared/pipes/SearchEngineFriendlyString.pipe';
import { ShopService } from './shared/services/Shop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  @Output() shop: PublicShop | undefined;
  @Output() categories: PublicCategory[] = [];

  constants = Constants;
  public currentYear: number = new Date().getFullYear();

  constructor(
    private dialog: MatDialog,
    private categoryService: CategoryService,
    public searchEngineFriendlyStringPipe: SearchEngineFriendlyStringPipe,
    private shopService: ShopService
  ) { }

  ngOnInit(): void {
    const domain = window.location.hostname;
    const subDomain = domain.replace(`.${this.constants.DGB_COMMERCE_DOMAIN}`, '');

    this.shopService.getBySubdomainPublic(subDomain).subscribe(shop => {
      this.shop = shop;

      this.categoryService.getByShopIdPublic(shop.Id).subscribe(categories => {
        this.categories = categories;
      });
    });
  }

  login() {

  }

  logout() {

  }

  signUp() {

  }
}
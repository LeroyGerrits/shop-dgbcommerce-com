import { Component, OnInit, Output } from '@angular/core';

import { CategoryService } from './shared/services/Category.service';
import { Constants } from './shared/Constants';
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
  public shop: PublicShop | undefined;
  public categories: PublicCategory[] | undefined;
  public currentYear: number = new Date().getFullYear();

  constructor(
    private dialog: MatDialog,
    private categoryService: CategoryService,
    public searchEngineFriendlyStringPipe: SearchEngineFriendlyStringPipe,
    private shopService: ShopService,
    private utilityService: UtilityService
  ) { }

  ngOnInit(): void {
    const domain = window.location.hostname;
    const subDomain = domain.replace(`.${this.constants.DGB_COMMERCE_DOMAIN}`, '');

    this.utilityService.shop = this.shopService.getBySubdomainPublic(subDomain);
    this.utilityService.shop.subscribe(shop => {
      this.shop = shop;

      this.utilityService.categories = this.categoryService.getByShopIdPublic(shop.Id);
      this.utilityService.categories.subscribe(categories => {
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
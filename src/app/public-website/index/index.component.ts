import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { Constants } from 'src/app/shared/Constants';
import { PublicCategory } from 'src/app/shared/models/viewmodels/PublicCategory.model';
import { PublicShop } from 'src/app/shared/models/viewmodels/PublicShop.model';
import { UtilityService } from 'src/app/shared/services/Utility.service';

@Component({
  selector: 'public-website-index',
  templateUrl: './index.component.html'
})
export class PublicWebsiteIndexComponent implements OnInit {
  public constants = Constants;
  public shop: PublicShop | undefined;
  public categories: PublicCategory[] | undefined;

  constructor(
    private metaService: Meta,
    private titleService: Title,
    private utilityService: UtilityService) { }

  ngOnInit() {
    this.utilityService.activeShop$.subscribe(shop => {
      this.shop = shop;
      this.metaService.addTag({ name: 'keywords', content: shop.Name });
      this.titleService.setTitle(`${shop.Name} - Home`);
    });
  }
}
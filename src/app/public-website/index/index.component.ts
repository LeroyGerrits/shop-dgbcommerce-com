import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { Constants } from 'src/app/shared/Constants';
import { GetProductsParameters } from 'src/app/shared/models/parameters/GetProductsParameters.model';
import { ProductService } from 'src/app/shared/services/Product.service';
import { PublicProduct } from 'src/app/shared/models/viewmodels/PublicProduct.model';
import { PublicShop } from 'src/app/shared/models/viewmodels/PublicShop.model';
import { UtilityService } from 'src/app/shared/services/Utility.service';

@Component({
  selector: 'public-website-index',
  templateUrl: './index.component.html'
})
export class PublicWebsiteIndexComponent implements OnInit {
  public constants = Constants;

  public products: PublicProduct[] = [];
  public shop: PublicShop | undefined;

  constructor(
    private metaService: Meta,
    private titleService: Title,
    private productService: ProductService,
    private utilityService: UtilityService) { }

  ngOnInit() {
    this.utilityService.activeShop$.subscribe(shop => {
      this.shop = shop;
      this.metaService.addTag({ name: 'keywords', content: shop.Name });
      this.titleService.setTitle(`${shop.Name} - Home`);

      const parameters: GetProductsParameters = {
        ShopId: shop.Id,
        //ShowOnHome: true
      };

      this.productService.getList(parameters).subscribe(products => {
        this.products = products;
      });
    });
  }
}
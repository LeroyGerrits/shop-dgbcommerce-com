import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/shared/Constants';
import { GetProductsParameters } from 'src/app/shared/models/parameters/GetProductsParameters.model';
import { ProductService } from 'src/app/shared/services/Product.service';
import { PublicCategory } from 'src/app/shared/models/viewmodels/PublicCategory.model';
import { PublicProduct } from 'src/app/shared/models/viewmodels/PublicProduct.model';
import { PublicShop } from 'src/app/shared/models/viewmodels/PublicShop.model';
import { UtilityService } from 'src/app/shared/services/Utility.service';

@Component({
  selector: 'public-website-category',
  templateUrl: './category.component.html'
})
export class PublicWebsiteCategoryComponent implements OnInit {
  public constants = Constants;

  public categories: PublicCategory[] | undefined;
  public category: PublicCategory | undefined;
  public products: PublicProduct[] = [];
  public shop: PublicShop | undefined;

  constructor(
    private route: ActivatedRoute,
    private metaService: Meta,
    private titleService: Title,
    private productService: ProductService,
    private utilityService: UtilityService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const queryStringCategoryId = params['categoryId'];

      this.utilityService.activeCategories$.subscribe(categories => {
        this.categories = categories;

        if (categories.length > 0 && queryStringCategoryId) {
          this.category = this.utilityService.getCategoryById(queryStringCategoryId);
        }
      });

      this.utilityService.activeShop$.subscribe(shop => {
        this.shop = shop;
        this.metaService.addTag({ name: 'keywords', content: shop.Name });
        this.titleService.setTitle(`${shop.Name} - Home`);

        const parameters: GetProductsParameters = {
          ShopId: shop.Id
        };

        if (queryStringCategoryId) {
          parameters.CategoryId = queryStringCategoryId;
        }

        this.productService.getList(parameters).subscribe(products => {
          this.products = products;
        });
      });
    });
  }
}
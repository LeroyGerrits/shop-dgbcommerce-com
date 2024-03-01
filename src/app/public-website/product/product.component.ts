import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/shared/Constants';
import { FormatRichTextPipe } from 'src/app/shared/pipes/FormatRichText.pipe';
import { ProductService } from 'src/app/shared/services/Product.service';
import { PublicProduct } from 'src/app/shared/models/viewmodels/PublicProduct.model';
import { PublicShop } from 'src/app/shared/models/viewmodels/PublicShop.model';
import { UtilityService } from 'src/app/shared/services/Utility.service';

@Component({
  selector: 'public-website-product',
  templateUrl: './product.component.html'
})
export class PublicWebsiteProductComponent implements OnInit {
  public constants = Constants;

  public product: PublicProduct | undefined;
  public productFormattedDescription: string = '';
  public shop: PublicShop | undefined;

  constructor(
    private formatRichTextPipe: FormatRichTextPipe,
    private route: ActivatedRoute,
    private metaService: Meta,
    private productService: ProductService,
    private titleService: Title,
    private utilityService: UtilityService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let queryStringProductId = params['productId'];
console.log(this.product);

      this.utilityService.activeShop$.subscribe(shop => {
        if (shop.Id) {
          this.shop = shop;

          this.productService.getById(shop.Id, queryStringProductId).subscribe(product => {
            this.product = product;
            console.log(this.product);

            if (this.product) {
              this.titleService.setTitle(this.product.Name);
              this.metaService.addTag({ name: 'keywords', content: this.product.Name });
              this.productFormattedDescription = this.formatRichTextPipe.transform(this.product.Description!);
            }
          });
        }
      });
    });
  }
}
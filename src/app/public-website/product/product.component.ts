import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/shared/Constants';
import { DialogAddToCartComponent } from 'src/app/shared/dialogs/add-to-cart/dialog.add-to-cart.component';
import { FormatRichTextPipe } from 'src/app/shared/pipes/FormatRichText.pipe';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from 'src/app/shared/services/Product.service';
import { PublicProduct } from 'src/app/shared/models/viewmodels/PublicProduct.model';
import { PublicShop } from 'src/app/shared/models/viewmodels/PublicShop.model';
import { UtilityService } from 'src/app/shared/services/Utility.service';

@Component({
  selector: 'public-website-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class PublicWebsiteProductComponent implements OnInit {
  public constants = Constants;

  public product: PublicProduct | undefined;
  public productFormattedDescription: string = '';
  public shop: PublicShop | undefined;

  constructor(
    private dialog: MatDialog,
    private formatRichTextPipe: FormatRichTextPipe,
    private route: ActivatedRoute,
    private metaService: Meta,
    private productService: ProductService,
    private titleService: Title,
    private utilityService: UtilityService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let queryStringProductId = params['productId'];

      this.utilityService.activeShop$.subscribe(shop => {
        if (shop.Id) {
          this.shop = shop;

          this.productService.getById(shop.Id, queryStringProductId).subscribe(product => {
            this.product = product;
            this.titleService.setTitle(product.Name);
            this.metaService.addTag({ name: 'keywords', content: product.Name });
            this.productFormattedDescription = this.formatRichTextPipe.transform(product.Description!);
          });
        }
      });
    });
  }

  addToCart() {
    const dialogAddToCart = this.dialog.open(DialogAddToCartComponent);
    const instance = dialogAddToCart.componentInstance;
    instance.product = this.product!;

    dialogAddToCart.afterClosed().subscribe(result => {
      if (result) {
        dialogAddToCart.close();
      }
    });
  }
}
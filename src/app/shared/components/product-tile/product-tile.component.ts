import { Component, Input } from '@angular/core';

import { DialogAddToCartComponent } from '../../dialogs/add-to-cart/dialog.add-to-cart.component';
import { Environment } from '../../environments/Environment.prod';
import { MatDialog } from '@angular/material/dialog';
import { PublicProduct } from '../../models/viewmodels/PublicProduct.model';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrl: './product-tile.component.scss'
})
export class ProductTileComponent {
  @Input() merchantId!: string;
  @Input() product!: PublicProduct;

  environment = Environment;

  constructor(
    private dialog: MatDialog
  ) { }

  addToCart() {
    const dialogAddToCart = this.dialog.open(DialogAddToCartComponent);
    const instance = dialogAddToCart.componentInstance;
    instance.product = this.product;

    dialogAddToCart.afterClosed().subscribe(result => {
      if (result) {
        dialogAddToCart.close();
      }
    });
  }
}
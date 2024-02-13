import { Component, Input, OnInit } from '@angular/core';

import { DialogAddToCartComponent } from '../../dialogs/add-to-cart/dialog.add-to-cart.component';
import { Environment } from '../../environments/Environment.prod';
import { MatDialog } from '@angular/material/dialog';
import { PublicProduct } from '../../models/viewmodels/PublicProduct.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html'
})
export class ProductTileComponent {
  @Input() merchantId!: string;
  @Input() product!: PublicProduct;

  environment = Environment;

  constructor(
    public dialog: MatDialog
  ) { }

  addToCart(){
    const dialogAddToCartUp = this.dialog.open(DialogAddToCartComponent);
    dialogAddToCartUp.afterClosed().subscribe(result => {
      if (result) {
        dialogAddToCartUp.close();
      }
    });
  }
}
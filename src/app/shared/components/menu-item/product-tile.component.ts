import { Component, Input, OnInit } from '@angular/core';

import { Environment } from '../../environments/Environment.prod';
import { PublicProduct } from '../../models/viewmodels/PublicProduct.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html'
})
export class ProductTileComponent implements OnInit {
  @Input() merchantId!: string;
  @Input() product!: PublicProduct;

  environment = Environment;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }
}
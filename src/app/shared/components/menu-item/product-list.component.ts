import { Component, Input, OnInit } from '@angular/core';

import { PublicProduct } from '../../models/viewmodels/PublicProduct.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  @Input() merchantId!: string;
  @Input() products!: PublicProduct[];  

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    
  }
}
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Constants } from 'src/app/shared/Constants';
import { Currency } from 'src/app/shared/models/Currency.model';
import { ShoppingCart } from 'src/app/shared/models/ShoppingCart.model';
import { ShoppingCartItem } from 'src/app/shared/models/ShoppingCartItem.model';
import { PublicShop } from 'src/app/shared/models/viewmodels/PublicShop.model';
import { ShoppingCartService } from 'src/app/shared/services/ShoppingCart.service';
import { UtilityService } from 'src/app/shared/services/Utility.service';

@Component({
  selector: 'public-website-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})

export class PublicWebsiteShoppingCartComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  public shop: PublicShop | undefined;
  public shoppingCart: ShoppingCart | undefined;

  constants = Constants;

  dataSource = new MatTableDataSource<ShoppingCartItem>;
  displayedColumns: string[] = ['ProductMainPhoto', 'ProductName', 'Amount', 'ProductPrice', 'Total', 'ActionButtons'];
  sortDirection: string | null = 'asc';

  constructor(
    private shoppingCartService: ShoppingCartService,
    private utilityService: UtilityService
  ) { }

  ngOnInit() {
    this.utilityService.activeShop$.subscribe(shop => this.shop = shop);
    this.retrieveShoppingCartItems();
  }

  retrieveShoppingCartItems() {
    this.utilityService.activeShoppingCart$.subscribe(shoppingCart => {
      this.shoppingCart = shoppingCart
      this.dataSource = new MatTableDataSource(shoppingCart.Items);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  onSortChange(sortState: Sort) {
    if (sortState.direction) {
      this.sortDirection = sortState.direction.toString();
    } else {
      this.sortDirection = null;
    }
  }
}
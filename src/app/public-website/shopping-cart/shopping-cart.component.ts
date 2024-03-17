import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Constants } from 'src/app/shared/Constants';
import { DialogDeleteComponent } from 'src/app/shared/dialogs/delete/dialog.delete.component';
import { MutationResult } from 'src/app/shared/models/MutationResult';
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
  public snackBarRef: MatSnackBarRef<TextOnlySnackBar> | undefined;

  dataSource = new MatTableDataSource<ShoppingCartItem>;
  displayedColumns: string[] = ['ProductMainPhoto', 'ProductName', 'Amount', 'ProductPrice', 'Total', 'ActionButtons'];
  sortDirection: string | null = 'asc';

  constructor(
    private dialog: MatDialog,
    private shoppingCartService: ShoppingCartService,
    private snackBar: MatSnackBar,
    private utilityService: UtilityService
  ) { }

  ngOnInit() {
    this.utilityService.activeShop$.subscribe(shop => this.shop = shop);
    this.retrieveShoppingCartItems();
  }

  retrieveShoppingCartItems() {
    this.utilityService.activeShoppingCart$.subscribe(shoppingCart => {
      this.shoppingCart = shoppingCart;
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

  deleteElement(element: ShoppingCartItem) {
    const dialogDelete = this.dialog.open(DialogDeleteComponent);
    const instance = dialogDelete.componentInstance;
    instance.dialogMessage = `Are you sure you want to remove '${element.ProductName}' from your shopping cart'?`;

    dialogDelete.afterClosed().subscribe(result => {
      if (result) {
        this.shoppingCartService.deleteItem(element.Id!).subscribe({
          next: result => this.handleOnSubmitResult(result),
          error: error => this.handleOnSubmitError(error),
          complete: () => dialogDelete.close()
        });
      }
    });
  }

  handleOnSubmitResult(result: MutationResult) {
    if (result.Success) {
      this.utilityService.updateShoppingCart();
    } else {
      this.snackBarRef = this.snackBar.open(result.Message, 'Close', { panelClass: ['error-snackbar'] });
    }
  }

  handleOnSubmitError(error: string) {
    this.snackBarRef = this.snackBar.open(error, 'Close', { panelClass: ['error-snackbar'] });
  }
}
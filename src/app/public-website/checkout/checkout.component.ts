import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';
import { MatSort, Sort } from '@angular/material/sort';

import { Constants } from 'src/app/shared/Constants';
import { DialogDeleteComponent } from 'src/app/shared/dialogs/delete/dialog.delete.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MutationResult } from 'src/app/shared/models/MutationResult';
import { PublicShop } from 'src/app/shared/models/viewmodels/PublicShop.model';
import { Router } from '@angular/router';
import { ShoppingCart } from 'src/app/shared/models/ShoppingCart.model';
import { ShoppingCartItem } from 'src/app/shared/models/ShoppingCartItem.model';
import { ShoppingCartService } from 'src/app/shared/services/ShoppingCart.service';
import { UtilityService } from 'src/app/shared/services/Utility.service';

@Component({
  selector: 'public-website-shopping-cart',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})

export class PublicWebsiteCheckoutComponent implements OnInit {
  public shop: PublicShop | undefined;
  public shoppingCart: ShoppingCart | undefined;

  constants = Constants;
  public snackBarRef: MatSnackBarRef<TextOnlySnackBar> | undefined;

  public form!: FormGroup;
  public formLoading = false;
  public formSubmitted = false;

  public controlEmailAddress = new FormControl('', [Validators.required, Validators.email]);
  public controlUsername = new FormControl('', Validators.required);
  public controlGender = new FormControl('0', Validators.required);
  public controlFirstName = new FormControl('');
  public controlLastName = new FormControl('', Validators.required);
  public controlAddressLine1 = new FormControl('', Validators.required);
  public controlAddressLine2 = new FormControl('');
  public controlPostalCode = new FormControl('', Validators.required);
  public controlCity = new FormControl('', Validators.required);
  public controlProvince = new FormControl('');
  public controlCountry = new FormControl('', Validators.required);

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private utilityService: UtilityService
  ) {
    this.form = new FormGroup([
      this.controlEmailAddress,
      this.controlUsername,
      this.controlGender,
      this.controlFirstName,
      this.controlLastName,
      this.controlAddressLine1,
      this.controlAddressLine2,
      this.controlPostalCode,
      this.controlCity,
      this.controlProvince,
      this.controlCountry
    ]);    
   }

  ngOnInit() {
    this.utilityService.activeShop$.subscribe(shop => this.shop = shop);
    this.retrieveShoppingCartItems();
  }

  retrieveShoppingCartItems() {
    this.utilityService.activeShoppingCart$.subscribe(shoppingCart => {
      console.log(shoppingCart);
      
      if (!shoppingCart || !shoppingCart.CumulativeAmount || shoppingCart.CumulativeAmount == 0)
        this.router.navigate(['/not-authorized']);



      this.shoppingCart = shoppingCart;
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
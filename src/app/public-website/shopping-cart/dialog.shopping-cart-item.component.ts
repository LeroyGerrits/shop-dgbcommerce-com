import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';

import { Constants } from 'src/app/shared/Constants';
import { MatDialogRef } from '@angular/material/dialog';
import { MutationResult } from 'src/app/shared/models/MutationResult';
import { Router } from '@angular/router';
import { ShoppingCartItem } from 'src/app/shared/models/ShoppingCartItem.model';
import { ShoppingCartService } from 'src/app/shared/services/ShoppingCart.service';
import { UtilityService } from 'src/app/shared/services/Utility.service';

@Component({
  selector: 'public-website-dialog-shopping-cart-item',
  templateUrl: 'dialog.shopping-cart-item.component.html',
  styleUrl: 'dialog.shopping-cart-item.component.scss'
})
export class PublicWebsiteDialogShoppingCartItemComponent implements OnInit {
  @Input() shoppingCartItem!: ShoppingCartItem;
  constants = Constants;

  public controlAmount = new FormControl('', [Validators.required, Validators.pattern(Constants.REGEX_PATTERN_NUMBER)]);

  public snackBarRef: MatSnackBarRef<TextOnlySnackBar> | undefined;

  public form!: FormGroup;
  public formLoading = false;
  public formSubmitted = false;

  public totalPrice: number = 0;

  constructor(
    private dialogRefComponent: MatDialogRef<any>,
    private shoppingCartService: ShoppingCartService,
    private router: Router,
    private snackBar: MatSnackBar,
    private utilityService: UtilityService
  ) {
    this.form = new FormGroup([
      this.controlAmount
    ]);
  }

  ngOnInit(): void {
    this.controlAmount.setValue(this.shoppingCartItem.Amount.toString());
    this.calculateTotal();
  }

  minus() {
    if (this.controlAmount.value) {
      let currentValue = parseInt(this.controlAmount.value);
      this.controlAmount.setValue((currentValue - 1).toString());
      this.change();
    }
  }

  plus() {
    if (this.controlAmount.value) {
      let currentValue = parseInt(this.controlAmount.value);
      this.controlAmount.setValue((currentValue + 1).toString());
      this.change();
    }
  }

  change() {
    if (this.controlAmount.value && !this.controlAmount.errors) {
      let currentValue = parseInt(this.controlAmount.value);

      if (currentValue == 0) {
        this.controlAmount.setValue('1');
        this.change();
      } else if (this.shoppingCartItem.ProductStock && currentValue > this.shoppingCartItem.ProductStock) {
        this.controlAmount.setValue(this.shoppingCartItem.ProductStock.toString());
        this.change();
      } else {
        this.calculateTotal();
      }
    }
  }

  calculateTotal() {
    if (this.controlAmount.value) {
      let currentValue = parseInt(this.controlAmount.value);
      this.totalPrice = currentValue * this.shoppingCartItem.ProductPrice;
    }
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.form.invalid) {
      return;
    }

    const shoppingCartItemToUpdate = Object.assign({}, this.shoppingCartItem)
    shoppingCartItemToUpdate.Amount = parseInt(this.controlAmount.value!);

    this.shoppingCartService.updateItem(shoppingCartItemToUpdate).subscribe({
      next: result => this.handleSave(result),
      error: error => this.handleError(error),
      complete: () => this.formLoading = false
    });
  }

  handleSave(result: MutationResult) {
    if (result.Success) {
      if (this.dialogRefComponent)
        this.dialogRefComponent.close();

      this.utilityService.updateShoppingCart();
    } else {
      this.snackBarRef = this.snackBar.open(result.Message, 'Close', { panelClass: ['error-snackbar'] });
    }
  }

  handleError(error: string) {
    this.snackBarRef = this.snackBar.open(error, 'Close', { panelClass: ['error-snackbar'] });
    this.formLoading = false;
  }
}
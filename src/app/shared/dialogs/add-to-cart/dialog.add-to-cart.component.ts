import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';

import { Constants } from '../../Constants';
import { MatDialogRef } from '@angular/material/dialog';
import { MutationResult } from '../../models/MutationResult';
import { PublicProduct } from '../../models/viewmodels/PublicProduct.model';
import { Router } from '@angular/router';
import { ShoppingCart } from '../../models/ShoppingCart.model';
import { ShoppingCartItem } from '../../models/ShoppingCartItem.model';
import { ShoppingCartService } from '../../services/ShoppingCart.service';
import { UtilityService } from '../../services/Utility.service';

@Component({
  selector: 'dialog-add-to-cart',
  templateUrl: 'dialog.add-to-cart.component.html',
  styleUrl: 'dialog.add-to-cart.component.scss'
})
export class DialogAddToCartComponent implements OnInit {
  @Input() product!: PublicProduct;

  public controlAmount = new FormControl('1', [Validators.required, Validators.pattern(Constants.REGEX_PATTERN_NUMBER)]);

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
      } else if (this.product.Stock && currentValue > this.product.Stock) {
        this.controlAmount.setValue(this.product.Stock.toString());
        this.change();
      } else {
        this.calculateTotal();
      }
    }
  }

  calculateTotal() {
    if (this.controlAmount.value) {
      let currentValue = parseInt(this.controlAmount.value);
      this.totalPrice = currentValue * this.product.Price;
    }
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.form.invalid) {
      return;
    }

    this.shoppingCartService.get().subscribe(shoppingCart => {
      if (!shoppingCart)
        this.handleError('Shopping cart could not be initialized.');

      const shoppingCartItemToCreate = new ShoppingCartItem();
      shoppingCartItemToCreate.Amount = parseInt(this.controlAmount.value!);
      shoppingCartItemToCreate.ProductId = this.product.Id;
      shoppingCartItemToCreate.ShoppingCartId = shoppingCart.Id;

      this.shoppingCartService.addItem(shoppingCartItemToCreate).subscribe({
        next: result => this.handleSave(result),
        error: error => this.handleError(error),
        complete: () => this.formLoading = false
      });
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
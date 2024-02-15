import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';

import { MatDialogRef } from '@angular/material/dialog';
import { MutationResult } from '../../models/MutationResult';
import { PublicProduct } from '../../models/viewmodels/PublicProduct.model';
import { Router } from '@angular/router';

@Component({
  selector: 'dialog-add-to-cart',
  templateUrl: 'dialog.add-to-cart.component.html',
  styleUrl: 'dialog.add-to-cart.component.scss'
})
export class DialogAddToCartComponent {
  @Input() product!: PublicProduct;

  public controlAmount = new FormControl('1', [Validators.required, Validators.pattern("^[0-9]*$")]);

  public snackBarRef: MatSnackBarRef<TextOnlySnackBar> | undefined;

  public form!: FormGroup;
  public formLoading = false;
  public formSubmitted = false;

  constructor(
    private dialogRefComponent: MatDialogRef<any>,
    //private shoppingCartService: ShoppingCartService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.form = new FormGroup([
      this.controlAmount
    ]);
  }

  minus() {
    if (this.controlAmount.value) {
      let currentValue = parseInt(this.controlAmount.value);
      this.controlAmount.setValue((currentValue - 1).toString());
    }
  }

  plus() {
    if (this.controlAmount.value) {
      let currentValue = parseInt(this.controlAmount.value);
      this.controlAmount.setValue((currentValue + 1).toString());
    }
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.form.invalid) {
      return;
    }

    /*const shoppingCartItemToCreate: Merchant = {
        Product: product,
        Amount: parseInt(this.controlAmount.value!)
    };

    this.merchantService.create(merchantToCreate).subscribe({
        next: result => this.handleOnSubmitResult(result),
        error: error => this.handleOnSubmitError(error),
        complete: () => this.formLoading = false
    });*/
  }

  handleOnSubmitResult(result: MutationResult) {
    if (result.Success) {
      if (this.dialogRefComponent)
        this.dialogRefComponent.close();

      this.router.navigate(['/message/account-registered']);
    } else {
      this.snackBarRef = this.snackBar.open(result.Message, 'Close', { panelClass: ['error-snackbar'] });
    }
  }

  handleOnSubmitError(error: string) {
    this.snackBarRef = this.snackBar.open(error, 'Close', { panelClass: ['error-snackbar'] });
    this.formLoading = false;
  }
}
import { Component, OnInit, Output } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { PublicShop } from './shared/models/viewmodels/PublicShop.model';
import { ShopService } from './shared/services/Shop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  @Output() activeShop: PublicShop | undefined;

  public currentYear: number = new Date().getFullYear();

  constructor(
    private dialog: MatDialog,
    private shopService: ShopService
  ) { }

  ngOnInit(): void {
    const domain = window.location.host;
    const subDomain = domain.replace('.dg', '');

    this.shopService.getBySubdomainPublic(subDomain).subscribe(shop => this.activeShop = shop);

    console.log('domain');
    console.log(domain)
    console.log('window.location');
    console.log(window.location)
  }

  login() {

  }

  logout() {

  }

  signUp() {

  }
}
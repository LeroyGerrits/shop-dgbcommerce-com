import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  public currentYear: number = new Date().getFullYear();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    const domain = window.location.host;
    console.log('domain');
    console.log(domain)
  }

  login() {

  }

  logout() {

  }

  signUp() {

  }
}
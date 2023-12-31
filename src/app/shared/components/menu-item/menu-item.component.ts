import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { PublicCategory } from '../../models/viewmodels/PublicCategory.model';
import { Router } from '@angular/router';
import { SearchEngineFriendlyStringPipe } from '../../pipes/SearchEngineFriendlyString.pipe';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {
  @Input() categories: PublicCategory[] = [];
  @ViewChild('buildMenu', { static: true }) public buildMenu: any;

  constructor(
    private router: Router,
    public searchEngineFriendlyStringPipe: SearchEngineFriendlyStringPipe
  ) { }

  ngOnInit() {

  }
}
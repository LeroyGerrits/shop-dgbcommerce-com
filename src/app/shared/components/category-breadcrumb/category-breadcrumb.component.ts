import { Component, Input, OnInit } from '@angular/core';

import { Environment } from '../../environments/Environment.prod';
import { PublicCategory } from '../../models/viewmodels/PublicCategory.model';
import { Router } from '@angular/router';
import { SearchEngineFriendlyStringPipe } from '../../pipes/SearchEngineFriendlyString.pipe';
import { UtilityService } from '../../services/Utility.service';

@Component({
  selector: 'app-category-breadcrumb',
  templateUrl: './category-breadcrumb.component.html'
})
export class CategoryBreadcrumbComponent implements OnInit {
  @Input() category!: PublicCategory;
  @Input() textOnly: boolean = false;

  parentCategory: PublicCategory | undefined;

  environment = Environment;

  constructor(
    private router: Router,
    public searchEngineFriendlyStringPipe: SearchEngineFriendlyStringPipe,
    private utilityService: UtilityService
  ) { }

  ngOnInit() {
    if (this.category.ParentId) {
      this.parentCategory = this.utilityService.getCategoryById(this.category.ParentId);
    }
  }
}
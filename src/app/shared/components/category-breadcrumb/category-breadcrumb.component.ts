import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

import { PublicCategory } from '../../models/viewmodels/PublicCategory.model';
import { SearchEngineFriendlyStringPipe } from '../../pipes/SearchEngineFriendlyString.pipe';
import { UtilityService } from '../../services/Utility.service';

@Component({
  selector: 'app-category-breadcrumb',
  templateUrl: './category-breadcrumb.component.html'
})
export class CategoryBreadcrumbComponent {
  @Input() category!: PublicCategory;
  @Input() textOnly: boolean = false;
  @Output() booleanEmitter = new EventEmitter();

  parentCategory: PublicCategory | undefined;

  constructor(
    public searchEngineFriendlyStringPipe: SearchEngineFriendlyStringPipe,
    private utilityService: UtilityService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['category'].currentValue != changes["category"].previousValue) {
      let currentCategory = <PublicCategory>changes["category"].currentValue;
      this.category = currentCategory;

      if (currentCategory.ParentId) {
        this.parentCategory = this.utilityService.getCategoryById(currentCategory.ParentId);
      } else {
        this.parentCategory = undefined;
      }
    }
  }
}
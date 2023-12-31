import { Component } from '@angular/core';
import { Constants } from 'src/app/shared/Constants';

@Component({
  selector: 'public-website-index',
  templateUrl: './index.component.html'
})
export class PublicWebsiteIndexComponent {
  constants = Constants;
}
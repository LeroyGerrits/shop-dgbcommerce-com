import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'public-website',
  templateUrl: './public-website.component.html'
})
export class PublicWebsiteComponent {
  constructor(private router: Router) { }
}
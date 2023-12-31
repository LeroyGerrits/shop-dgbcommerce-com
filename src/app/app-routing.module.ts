import { RouterModule, Routes } from '@angular/router';

import { Constants } from './shared/Constants';
import { NgModule } from '@angular/core';
import { PublicWebsiteAboutComponent } from './public-website/about/about.component';
import { PublicWebsiteComponent } from './public-website/public-website.component';
import { PublicWebsiteIndexComponent } from './public-website/index/index.component';
import { PublicWebsiteNotAuthorizedComponent } from './public-website/not-authorized/not-authorized.component';
import { PublicWebsiteNotFoundComponent } from './public-website/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', component: PublicWebsiteComponent, title: Constants.TITLE_PREFIX, children: [
      { path: '', component: PublicWebsiteIndexComponent },
      { path: 'about', component: PublicWebsiteAboutComponent, title: `${Constants.TITLE_PREFIX} - About` },
      { path: 'not-authorized', component: PublicWebsiteNotAuthorizedComponent, title: `${Constants.TITLE_PREFIX} - Not authorized` },
      { path: '**', pathMatch: 'full', component: PublicWebsiteNotFoundComponent, title: `${Constants.TITLE_PREFIX} - Not found` }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

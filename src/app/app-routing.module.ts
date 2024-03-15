import { RouterModule, Routes } from '@angular/router';

import { Constants } from './shared/Constants';
import { NgModule } from '@angular/core';
import { PublicWebsiteAboutComponent } from './public-website/about/about.component';
import { PublicWebsiteCategoryComponent } from './public-website/category/category.component';
import { PublicWebsiteComponent } from './public-website/public-website.component';
import { PublicWebsiteIndexComponent } from './public-website/index/index.component';
import { PublicWebsiteNotAuthorizedComponent } from './public-website/not-authorized/not-authorized.component';
import { PublicWebsiteNotFoundComponent } from './public-website/not-found/not-found.component';
import { PublicWebsitePageComponent } from './public-website/page/page.component';
import { PublicWebsiteProductComponent } from './public-website/product/product.component';
import { PublicWebsiteShoppingCartComponent } from './public-website/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: '', component: PublicWebsiteComponent, title: Constants.TITLE_PREFIX, children: [
      { path: '', component: PublicWebsiteIndexComponent },
      { path: 'about', component: PublicWebsiteAboutComponent, title: `${Constants.TITLE_PREFIX} - About` },
      { path: 'category', component: PublicWebsiteCategoryComponent, title: `${Constants.TITLE_PREFIX} - Category` },
      { path: 'category/:categoryId', component: PublicWebsiteCategoryComponent, title: `${Constants.TITLE_PREFIX} - Category` },
      { path: 'category/:categoryId/:categoryName', component: PublicWebsiteCategoryComponent, title: `${Constants.TITLE_PREFIX} - Category` },
      { path: 'page', component: PublicWebsitePageComponent, title: `${Constants.TITLE_PREFIX} - Page` },
      { path: 'page/:pageId', component: PublicWebsitePageComponent, title: `${Constants.TITLE_PREFIX} - Page` },
      { path: 'page/:pageId/:pageTitle', component: PublicWebsitePageComponent, title: `${Constants.TITLE_PREFIX} - Page` },
      { path: 'product', component: PublicWebsiteProductComponent, title: `${Constants.TITLE_PREFIX} - Product` },
      { path: 'product/:productId', component: PublicWebsiteProductComponent, title: `${Constants.TITLE_PREFIX} - Product` },
      { path: 'product/:productId/:productName', component: PublicWebsiteProductComponent, title: `${Constants.TITLE_PREFIX} - Product` },
      { path: 'shopping-cart', component: PublicWebsiteShoppingCartComponent, title: `${Constants.TITLE_PREFIX} - Shopping cart` },
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

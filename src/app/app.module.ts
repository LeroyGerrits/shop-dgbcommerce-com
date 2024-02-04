import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from './shared/services/Authentication.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryBreadcrumbComponent } from './shared/components/category-breadcrumb/category-breadcrumb.component';
import { CategoryService } from './shared/services/Category.service';
import { CountryService } from './shared/services/Country.service';
import { CurrencyService } from './shared/services/Currency.service';
import { CustomerService } from './shared/services/Customer.service';
import { DatePipe } from '@angular/common';
import { DeliveryMethodService } from './shared/services/DeliveryMethod.service';
import { DigiByteNodeService } from './shared/services/DigiByteNode.service';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { FileSizePipe } from './shared/pipes/FileSize.pipe';
import { JwtInterceptor } from './shared/interceptors/jwt.interceptor';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MenuItemComponent } from './shared/components/menu-item/menu-item.component';
import { MerchantPasswordResetLinkService } from './shared/services/MerchantPasswordResetLink.service';
import { MerchantService } from './shared/services/Merchant.service';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './shared/components/product-list/product-list.component';
import { ProductPhotoService } from './shared/services/ProductPhoto.service';
import { ProductService } from './shared/services/Product.service';
import { ProductTileComponent } from './shared/components/product-tile/product-tile.component';
import { PublicWebsiteAboutComponent } from './public-website/about/about.component';
import { PublicWebsiteCategoryComponent } from './public-website/category/category.component';
import { PublicWebsiteComponent } from './public-website/public-website.component';
import { PublicWebsiteIndexComponent } from './public-website/index/index.component';
import { PublicWebsiteNotAuthorizedComponent } from './public-website/not-authorized/not-authorized.component';
import { PublicWebsiteNotFoundComponent } from './public-website/not-found/not-found.component';
import { QRCodeModule } from 'angularx-qrcode';
import { RouterModule } from '@angular/router';
import { SearchEngineFriendlyStringPipe } from './shared/pipes/SearchEngineFriendlyString.pipe';
import { ShopCategoryService } from './shared/services/ShopCategory.service';
import { ShopService } from './shared/services/Shop.service';
import { StripHtmlPipe } from './shared/pipes/StripHtml.pipe';
import { UtilityService } from './shared/services/Utility.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoryBreadcrumbComponent,
    FileSizePipe,
    MenuItemComponent,
    ProductListComponent,
    ProductTileComponent,
    PublicWebsiteComponent,
    PublicWebsiteAboutComponent,
    PublicWebsiteCategoryComponent,
    PublicWebsiteIndexComponent,
    PublicWebsiteNotAuthorizedComponent,
    PublicWebsiteNotFoundComponent,
    SearchEngineFriendlyStringPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatBadgeModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    QRCodeModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthenticationService,
    CategoryService,
    CountryService,
    CurrencyService,
    CustomerService,
    DatePipe,
    DeliveryMethodService,
    DigiByteNodeService,
    FileSizePipe,
    MerchantService,
    MerchantPasswordResetLinkService,
    ProductService,
    ProductPhotoService,
    SearchEngineFriendlyStringPipe,
    ShopService,
    ShopCategoryService,
    StripHtmlPipe,
    UtilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
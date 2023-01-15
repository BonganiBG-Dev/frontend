import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { ExplorerPageComponent } from './views/explorer-page/explorer-page.component';
import { ComparePageComponent } from './views/compare-page/compare-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './views/components/header/header.component';
import { FooterComponent } from './views/components/footer/footer.component';
import { ComparisonBannerComponent } from './views/components/banners/comparison-banner/comparison-banner.component';
import { LandingBannerComponent } from './views/landing-page/landing-banner/landing-banner.component';
import { StoresBannerComponent } from './views/components/banners/stores-banner/stores-banner.component';
import { ProductCardComponent } from './views/components/product-card/product-card.component';
import { TopPicksComponent } from './views/landing-page/top-picks/top-picks.component';
import { ExploreHeaderComponent } from './views/explorer-page/explore-header/explore-header.component';
import { SearchFilterComponent } from './views/explorer-page/search-filter/search-filter.component';
import { ProductListComponent } from './views/explorer-page/product-list/product-list.component';
import { CompareProductComponent } from './views/compare-page/compare-product/compare-product.component';
import { CompareListComponent } from './views/compare-page/compare-list/compare-list.component';
import { ProductSkeletonLoaderComponent } from './views/components/product-skeleton-loader/product-skeleton-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ExplorerPageComponent,
    ComparePageComponent,
    HeaderComponent,
    FooterComponent,
    ComparisonBannerComponent,
    LandingBannerComponent,
    StoresBannerComponent,
    ProductCardComponent,
    TopPicksComponent,
    ExploreHeaderComponent,
    SearchFilterComponent,
    ProductListComponent,
    CompareProductComponent,
    CompareListComponent,
    ProductSkeletonLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

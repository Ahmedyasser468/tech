import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './commerce/categories/categories.component';
import { ProductsComponent } from './commerce/products/products.component';
import { LandingComponent } from './commerce/landing/landing.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ReadMorePipe } from './pipes/read-more.pipe';
import { MusicComponent } from './commerce/music/music.component';
import { YoungComponent } from './commerce/young/young.component';
import { TechComponent } from './commerce/tech/tech.component';




@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ProductsComponent,
    LandingComponent,
    ReadMorePipe,
    MusicComponent,
    YoungComponent,
    TechComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { RouterTestingModule } from "@angular/router/testing";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './products/products.service';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './add-product/add-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';  
import { HomeModule } from './home/home.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'my-account', component: MyAccountComponent},
  { path: 'products/:id', component: ProductsComponent},
  { path: 'cart', component: CartComponent},
  { path: 'add-product', component: AddProductComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MyAccountComponent,
    ProductsComponent,
    CartComponent,
    AddProductComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    RouterTestingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),  
    BrowserAnimationsModule,
    HomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

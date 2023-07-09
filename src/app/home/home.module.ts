import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProductsComponent } from '../products/products.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'notebooks', component: ProductsComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class HomeModule { }
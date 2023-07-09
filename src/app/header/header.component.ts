import { Component, EventEmitter, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../products/model/product.model';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart: Array<Object> = [];
  constructor(private http: HttpClient, public productService: ProductsService) { }
  ngOnInit(): void {
    this.getCart();
  }
  getCart(){
    this.http.get<Product[]>('http://localhost:3000/cart').subscribe(res => {
      this.cart = res;
    })
  }
  
}

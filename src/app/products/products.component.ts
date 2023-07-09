import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from './model/product.model';
import { ProductsService } from './products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  loadedProducts: Product[] = [];

  constructor(private productService: ProductsService, private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getProducts(params['id'])
    });
  }
  getProducts(type: string){
    this.http.get<Product[]>(`http://localhost:3000/${type}`)
      .subscribe(products => {
        this.loadedProducts = products;
      })
  }
  addToCart(res: Product){
    this.productService.cartChanged(res)
  }
  
  

}

import { Component, OnInit } from '@angular/core';
import { Product } from '../products/model/product.model';
import { ProductsService } from '../products/products.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  totalPrice: number = 0;
  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.cartProducts;
    this.products.forEach(element => {
      this.totalPrice += parseInt(element.price) * element.quantity;
    });
  }
  changeQuantity(){
    this.totalPrice = 0;
    this.products.forEach(element => {
      this.totalPrice += parseInt(element.price) * element.quantity;
    });
  }
  removeProduct(product: Product){
    this.products.forEach( (element,index) => {
      if(element.title === product.title){
        this.products.splice(index, 1)
      }
    });
  this.changeQuantity()
  }
}

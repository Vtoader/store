import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import {By} from "@angular/platform-browser";

import { ProductsService } from '../products/products.service'

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should use the product from the service', () => {
    let fixture = TestBed.createComponent(CartComponent);
    let app = fixture.debugElement.componentInstance;
    let productService = fixture.debugElement.injector.get(ProductsService);
    fixture.detectChanges();
    expect(productService.cartProducts).toEqual(app.products);
  })
  
});

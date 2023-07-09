import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from "@angular/router/testing";
import {By} from "@angular/platform-browser";

import { ProductsService } from '../products/products.service'

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check notebooks router', () => {
  let href = fixture.debugElement.query(By.css('.notebooks')).nativeElement
    .getAttribute('href');
    expect(href).toEqual('/products/notebooks');
  });

  it('should check mobile router', () => {
  let href = fixture.debugElement.query(By.css('.mobile')).nativeElement
    .getAttribute('href');
    expect(href).toEqual('/products/mobile');
  });

  it('should check tv router', () => {
    let href = fixture.debugElement.query(By.css('.tv')).nativeElement
      .getAttribute('href');
      expect(href).toEqual('/products/tv');
    });

    it('should check my-account router', () => {
      let href = fixture.debugElement.query(By.css('.my-account')).nativeElement
        .getAttribute('href');
        expect(href).toEqual('/my-account');
      });

      it('should check add-product router', () => {
        let href = fixture.debugElement.query(By.css('.add-product')).nativeElement
          .getAttribute('href');
          expect(href).toEqual('/add-product');
        });
    
  
});

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: any;
  

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService) { 
    this.productForm = this.formBuilder.group({
      title: ['',  [Validators.required, Validators.minLength(2)]],
      price: '',
      type: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(productData: any){
    const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    if(this.productForm.valid){
      this.http.post('http://localhost:3000/mobile', productData, { headers }).subscribe(response => {
        this.toastr.success("Product added")
        this.router.navigate(["/"]);
      }); 
    } else {
      this.toastr.error("Form not valid")
    }
   
  }

}

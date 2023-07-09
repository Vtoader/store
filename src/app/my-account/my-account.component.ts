import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from './model/user.model'
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  userForm: any;
  

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) { 
    this.userForm = this.formBuilder.group({
      email: '',
      firstName: '',
      lastName: '',
      password: ''
    });
  }

  ngOnInit() {
   this.getUser();
  }
  onSubmit(userData: any){
    this.http.put('http://localhost:3000/users/1', userData).subscribe(response => {
      this.router.navigate(["/"]);
    });
  }
  getUser(){
    this.http.get<User>('http://localhost:3000/users/1').subscribe(res => {
      this.userForm.get("firstName").setValue(res.firstName)
      this.userForm.get("lastName").setValue(res.lastName)
      this.userForm.get("email").setValue(res.email)
    })
  }

}

import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

interface Category {
  name: string;
  date: string;
}

interface Company {
  name: string;
  date: string;
}

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent{

  CategoryControl = new FormControl('', [Validators.required]);
  companyControl = new FormControl('',Validators.required);
  productNameFormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]);
  productPriceNameFormControl = new FormControl('', [Validators.required]);
  
  matcher = new MyErrorStateMatcher();
  categories: Category[] = [
    {name: 'Milk', date: '31-05-2023'},
    {name: 'Ghee', date: '31-05-2023'},
    {name: 'Butter', date: '31-05-2023'},
    {name: 'Bread', date: '31-05-2023'},
  ];

  companies: Category[] = [
    {name: 'Amul', date: '31-05-2023'},
    {name: 'Mother Dairy', date: '31-05-2023'},
    {name: 'Sidha', date: '31-05-2023'},
    {name: 'Patanjali', date: '31-05-2023'},
  ];

  constructor(){

  }

}

import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {FormControl, FormGroupDirective, NgForm, Validators, ValidatorFn} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}




interface PageSize{
  size:number;
};

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.scss']
})
export class SearchproductComponent implements OnInit {

  //items per page
  pageSize: PageSize[] = [
    {size: 5},
    {size: 10},
    {size: 15},
    {size: 20},
  ];
  searchproduct: string="";  //search category
  selectedRowIndex: number = -1;
  data: any[]=[]; // Data array to be paginated
  pageSizes = 5; // Default number of items to display per page
  totalItems: number = 0; // Total number of items
  pageIndex = 0; // Current page index


  shoppingData: any[]=[]; // Data array to be paginated
  shopingPageSizes = 5; // Default number of items to display per page
  shopingTotalItems: number = 0; // Total number of items
  shopingPageIndex = 0; // Current page index

  // shopingTotalQuantity = 0;
  // shopingTotalPrice = 0;

  quantity:number=0;  //quantity of products 

  customerName = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]);
  customerNumber = new FormControl('', [Validators.required,Validators.maxLength(10)]);

  matcher = new MyErrorStateMatcher();

  constructor() {
    // Initialize your data array
    this.data = [
      { id: 1, category: 'Milk', comapany: 'Amul', productName:'Amul Milk 500ml', pricing: 30}
    ];

    // Set the totalItems variable
    this.totalItems = this.data.length;


    //shopping cart - selected products
    this.shoppingData = [
      { id: 1, productName:'Amul Milk 500ml', category: 'Milk', comapany: 'Amul', quantity:2, unitPrice:30}
    ];

    // Set the totalItems variable
    this.shopingTotalItems = this.shoppingData.length;
  }

  ngOnInit(): void {
    
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
  }

  editCategory(category: any): void {
    // Perform the edit operation here
    console.log('Edit Category:', category);
  }

  deleteCategory(category: any): void {
    // Perform the delete operation here
    console.log('Delete Category:', category);
  }

  searchProduct(){
    console.log("search success.");
  }

  emptyCart(){
    console.log("delete success.");
  }

  totalQuantity(){
      let shopingTotalQuantity = 0;
      for(let item of this.shoppingData){
        shopingTotalQuantity = shopingTotalQuantity + item.quantity;
      }
      return shopingTotalQuantity;
  }

  totalPrice(){
    let shopingTotalPrice = 0;
    for(let item of this.shoppingData){
      let price = item.quantity * item.unitPrice;
      shopingTotalPrice = shopingTotalPrice + price;
    }
    return shopingTotalPrice;
  }

  onRowEnter(index: number) {
  this.selectedRowIndex = index;
  }

  onRowLeave() {
    this.selectedRowIndex = -1;
  }

}

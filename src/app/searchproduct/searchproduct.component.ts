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
  searchAllProducts: string="";  //search category
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

  searchProducts = new FormControl('', [Validators.pattern('^[a-zA-Z0-9 ]*$')]);
  customerName = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]);
  customerNumber = new FormControl('', [Validators.required, Validators.pattern('^[0-9 ]*$')]);

  matcher = new MyErrorStateMatcher();

  paymentMethods: string[] = ['Cash', 'Credit Card', 'Debit Card','Others'];
  defualtMethod: string;

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

    this.defualtMethod = this.paymentMethods[0];

  }

  ngOnInit(): void {
    
  }

  searchProduct(event: any){
    const searchProduct = event.target.value;
    console.log('Search Product:',searchProduct);
  }

  searchAllProduct(){
      console.log('searchAllProducts:',this.searchAllProducts);
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
  }

  addCart(){

  }
  
  removeItem(){

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

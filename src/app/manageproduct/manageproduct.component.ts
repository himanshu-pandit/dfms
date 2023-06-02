import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

interface PageSize {
  size: number;
}

@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrls: ['./manageproduct.component.scss']
})
export class ManageproductComponent implements OnInit {

//items per page
  pageSize: PageSize[] = [
    {size: 5},
    {size: 10},
    {size: 15},
    {size: 20},
  ];

  searchproduct: string="";  //search Product
  selectedRowIndex: number = -1;

  data: any[]=[]; // Data array to be paginated
  pageSizes = 5; // Default number of items to display per page
  totalItems: number = 0; // Total number of items
  pageIndex = 0; // Current page index

  constructor() {
    this.data = [
      { id: 1, categoryName: 'Milk', companyName: 'Amul',  productName: 'Amul Milk 2ltr', productPrice:'60', postingDate: '2021-01-01 10:23:12' },
      { id: 2, categoryName: 'Milk', companyName: 'Ananda Dairy',  productName: 'Amul Milk 500ml', productPrice:'33', postingDate: '2021-01-01 10:23:12' },
      { id: 3, categoryName: 'Ice Cream', companyName: 'Kwality Limited',  productName: 'Full Cream Milk 500ml', productPrice:'200', postingDate: '2021-01-01 10:23:12' },
      { id: 4, categoryName: 'Butter', companyName: 'Gokul Dairy',  productName: 'Butter 100mg', productPrice:'300', postingDate: '2021-01-01 10:23:12' },
      { id: 5, categoryName: 'Paneer', companyName: 'Amul',  productName: 'Paneer 1kg', productPrice:'400', postingDate: '2021-01-01 10:23:12' },
      { id: 6, categoryName: 'Ghee', companyName: 'Shiv Shakti Dairy Products',  productName: 'Ghee 500mg', productPrice:'450', postingDate: '2021-01-01 10:23:12' },
    ];
    
    // Set the totalItems variable
    this.totalItems = this.data.length;
   }

  ngOnInit(): void {
  }


  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
  }

  editProduct(Product: any): void {
    // Perform the edit operation here
    console.log('Edit Product:', Product);
  }

  deleteProduct(Product: any): void {
    // Perform the delete operation here
    console.log('Delete Product:', Product);
  }

  searchProduct(){

  }

  onRowEnter(index: number) {
  this.selectedRowIndex = index;
  }

  onRowLeave() {
    this.selectedRowIndex = -1;
  }


}

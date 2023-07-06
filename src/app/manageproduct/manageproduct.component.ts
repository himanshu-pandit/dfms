import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { DataService } from '../services/data.service';

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

  constructor(private dataService:DataService) {
    
    // Set the totalItems variable
    // this.totalItems = this.data.length;
   }

  ngOnInit(): void {

    this.data = this.dataService.getProducts();

    // Set the totalItems variable
    this.totalItems = this.data.length;
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

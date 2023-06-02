import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

interface PageSize {
  size: number;
}

@Component({
  selector: 'app-managecompany',
  templateUrl: './managecompany.component.html',
  styleUrls: ['./managecompany.component.scss']
})
export class ManagecompanyComponent implements OnInit {

  //items per page
  pageSize: PageSize[] = [
    {size: 5},
    {size: 10},
    {size: 15},
    {size: 20},
  ];
  
  searchcompany: string="";  //search Company
  selectedRowIndex: number = -1;

  data: any[]=[]; // Data array to be paginated
  pageSizes = 5; // Default number of items to display per page
  totalItems: number = 0; // Total number of items
  pageIndex = 0; // Current page index

  constructor() {
    this.data = [
      { id: 1, companyName: 'Amul', postingDate: '2021-01-01 10:23:12' },
      { id: 2, companyName: 'Mother Dairy', postingDate: '2021-01-01 10:23:12' },
      { id: 3, companyName: 'Nestle India', postingDate: '2021-01-01 10:23:12' },
      { id: 4, companyName: 'Britannia Industries Limited', postingDate: '2021-01-01 10:23:12' },
      { id: 5, companyName: 'Parag Milk Foods', postingDate: '2021-01-01 10:23:12' },
      { id: 6, companyName: 'Hatsun Agro Product Ltd', postingDate: '2021-01-01 10:23:12' },
      { id: 7, companyName: 'Heritage Foods Ltd', postingDate: '2021-01-01 10:23:12' },
      { id: 8, companyName: 'Kwality Limited', postingDate: '2021-01-01 10:23:12' },
      { id: 9, companyName: 'Prabhat Dairy Ltd', postingDate: '2021-01-01 10:23:12' },
      { id: 10, companyName: 'Vijaya Dairy', postingDate: '2021-01-01 10:23:12' },
      { id: 11, companyName: 'Milky Mist Dairy', postingDate: '2021-01-01 10:23:12' },
      { id: 12, companyName: 'Dynamix Dairy Industries Ltd', postingDate: '2021-01-01 10:23:12' },
      { id: 13, companyName: 'Creamline Dairy Products Ltd', postingDate: '2021-01-01 10:23:12' },
      { id: 14, companyName: 'Tirumala Milk Products', postingDate: '2021-01-01 10:23:12' },
      { id: 15, companyName: 'Ananda Dairy', postingDate: '2021-01-01 10:23:12' },
      { id: 16, companyName: 'Saras', postingDate: '2021-01-01 10:23:12' },
      { id: 17, companyName: 'Verka', postingDate: '2021-01-01 10:23:12' },
      { id: 18, companyName: 'Aavin', postingDate: '2021-01-01 10:23:12' },
      { id: 19, companyName: 'Gujarat Cooperative Milk Marketing Federation Ltd (GCMMF)', postingDate: '2021-01-01 10:23:12' },
      { id: 20, companyName: 'Dudhsagar Dairy', postingDate: '2021-01-01 10:23:12' },
      { id: 21, companyName: 'Heritage TUCH', postingDate: '2021-01-01 10:23:12' },
      { id: 22, companyName: 'Dairy Classic Ice Creams', postingDate: '2021-01-01 10:23:12' },
      { id: 23, companyName: 'Prabhat Milks', postingDate: '2021-01-01 10:23:12' },
      { id: 24, companyName: 'Param Dairy Ltd', postingDate: '2021-01-01 10:23:12' },
      { id: 25, companyName: 'Cream Bell Ice Cream', postingDate: '2021-01-01 10:23:12' },
      { id: 26, companyName: 'Heritage Yumz', postingDate: '2021-01-01 10:23:12' },
      { id: 27, companyName: 'Gokul Dairy', postingDate: '2021-01-01 10:23:12' },
      { id: 28, companyName: 'KC Dairy', postingDate: '2021-01-01 10:23:12' },
      { id: 29, companyName: 'Milma', postingDate: '2021-01-01 10:23:12' },
      { id: 30, companyName: 'Hatsun', postingDate: '2021-01-01 10:23:12' },
      { id: 31, companyName: 'Vita', postingDate: '2021-01-01 10:23:12' },
      { id: 32, companyName: 'GRB Dairy Foods', postingDate: '2021-01-01 10:23:12' },
      { id: 33, companyName: 'Milkyway Dairy', postingDate: '2021-01-01 10:23:12' },
      { id: 34, companyName: 'Suruchi Foods', postingDate: '2021-01-01 10:23:12' },
      { id: 35, companyName: 'Sanchi Milk', postingDate: '2021-01-01 10:23:12' },
      { id: 36, companyName: 'Keventer', postingDate: '2021-01-01 10:23:12' },
      { id: 37, companyName: 'Aanchal Dairy', postingDate: '2021-01-01 10:23:12' },
      { id: 38, companyName: 'Tribeni', postingDate: '2021-01-01 10:23:12' },
      { id: 39, companyName: 'Go Cheese', postingDate: '2021-01-01 10:23:12' },
      { id: 40, companyName: 'Cream Bell', postingDate: '2021-01-01 10:23:12' },
      { id: 41, companyName: 'Shivamrut Dudh Utpadak Sahakari Sangh Ltd.', postingDate: '2021-01-01 10:23:12' },
      { id: 42, companyName: 'Shiv Shakti Dairy Products', postingDate: '2021-01-01 10:23:12' },
      { id: 43, companyName: 'Dudhpukur Agro Pvt Ltd', postingDate: '2021-01-01 10:23:12' },
      { id: 44, companyName: 'Meerut Agro India Ltd', postingDate: '2021-01-01 10:23:12' },
      { id: 45, companyName: 'Prakash Dairy', postingDate: '2021-01-01 10:23:12' },
      { id: 46, companyName: 'Snowcap Dairy', postingDate: '2021-01-01 10:23:12' },
      { id: 47, companyName: 'Siddhi Vinayak Dairy', postingDate: '2021-01-01 10:23:12' },
      { id: 48, companyName: 'Mother Care Foods Pvt Ltd', postingDate: '2021-01-01 10:23:12' },
      { id: 49, companyName: 'Bareilly Milk Union', postingDate: '2021-01-01 10:23:12' },
      { id: 50, companyName: 'GRD Dairy Foods', postingDate: '2021-01-01 10:23:12' }
    ];
    
    // Set the totalItems variable
    this.totalItems = this.data.length;
   }

  ngOnInit(): void {
  }


  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
  }

  editCompany(Company: any): void {
    // Perform the edit operation here
    console.log('Edit Company:', Company);
  }

  deleteCompany(Company: any): void {
    // Perform the delete operation here
    console.log('Delete Company:', Company);
  }

  searchCompany(){

  }

  onRowEnter(index: number) {
  this.selectedRowIndex = index;
  }

  onRowLeave() {
    this.selectedRowIndex = -1;
  }

}

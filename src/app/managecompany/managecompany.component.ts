import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { DataService } from '../services/data.service';

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

  constructor(private dataService:DataService) {
    
    // Set the totalItems variable
    // this.totalItems = this.data.length;
   }

  ngOnInit(): void {
    this.data = this.dataService.getCompany();

    // Set the totalItems variable
    this.totalItems = this.data.length;
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

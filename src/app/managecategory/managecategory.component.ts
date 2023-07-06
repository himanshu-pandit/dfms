import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { DataService } from '../services/data.service';
interface PageSize {
  size: number;
}

@Component({
  selector: 'app-managecategory',
  templateUrl: './managecategory.component.html',
  styleUrls: ['./managecategory.component.scss']
})
export class ManagecategoryComponent implements OnInit {

  //items per page
  pageSize: PageSize[] = [
    {size: 5},
    {size: 10},
    {size: 15},
    {size: 20},
  ];
  searchcategory: string="";  //search category
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
    debugger;
    this.data = this.dataService.getCategory();

    // Set the totalItems variable
    this.totalItems = this.data.length;
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

  searchCategory(){

  }

  onRowEnter(index: number) {
  this.selectedRowIndex = index;
  }

  onRowLeave() {
    this.selectedRowIndex = -1;
  }

}

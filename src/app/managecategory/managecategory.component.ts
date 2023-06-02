import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

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


  constructor() {
    // Initialize your data array
    this.data = [
      { id: 1, category: 'Milk', categoryCode: 'MILK789', postingDate: '2021-01-01 10:23:12' },
      { id: 2, category: 'Cheese', categoryCode: 'CHEE431', postingDate: '2021-01-01 10:23:12' },
      { id: 3, category: 'Butter', categoryCode: 'BUTT224', postingDate: '2021-01-01 10:23:12' },
      { id: 4, category: 'Yogurt', categoryCode: 'YOGU936', postingDate: '2021-01-01 10:23:12' },
      { id: 5, category: 'Ice Cream', categoryCode: 'ICCR567', postingDate: '2021-01-01 10:23:12' },
      { id: 6, category: 'Custard', categoryCode: 'CUST529', postingDate: '2021-01-01' },
      { id: 7, category: 'Milkshake', categoryCode: 'MISH742', postingDate: '2021-01-01' },
      { id: 8, category: 'Sour Milk', categoryCode: 'SOMK853', postingDate: '2021-01-01' },
      { id: 9, category: 'Milk Powder', categoryCode: 'MOPW712', postingDate: '2021-01-01' },
      { id: 10, category: 'Paneer', categoryCode: 'PANE581', postingDate: '2021-01-01' },
      { id: 11, category: 'Mawa', categoryCode: 'MAWA337', postingDate: '2021-01-01' },
      { id: 12, category: 'Lassi', categoryCode: 'LASS963', postingDate: '2021-01-01' },
      { id: 13, category: 'Butter Oil', categoryCode: 'BUOI461', postingDate: '2021-01-01' },
      { id: 14, category: 'Ghee', categoryCode: 'GHEE592', postingDate: '2021-01-01' },
      { id: 15, category: 'Whey Protein', categoryCode: 'WHPN712', postingDate: '2021-01-01' },
      { id: 16, category: 'Cottage Cheese', categoryCode: 'COCH772', postingDate: '2021-01-01 10:23:12' },
      { id: 17, category: 'Sour Cream', categoryCode: 'SOUR698', postingDate: '2021-01-01 10:23:12' },
      { id: 18, category: 'Cream Cheese', categoryCode: 'CRCH467', postingDate: '2021-01-01 10:23:12' },
      { id: 19, category: 'Whipped Cream', categoryCode: 'WHCR817', postingDate: '2021-01-01 10:23:12' },
      { id: 20, category: 'Condensed Milk', categoryCode: 'COML999', postingDate: '2021-01-01 10:23:12' },
      { id: 21, category: 'Evaporated Milk', categoryCode: 'EVMK298', postingDate: '2021-01-01 10:23:12' },
      { id: 22, category: 'Almond Milk', categoryCode: 'ALMK124', postingDate: '2021-01-01 10:23:12' },
      { id: 23, category: 'Soy Milk', categoryCode: 'SOYM742', postingDate: '2021-01-01 10:23:12' },
      { id: 24, category: 'Oat Milk', categoryCode: 'OATM853', postingDate: '2021-01-01 10:23:12' },
      { id: 25, category: 'Goat Cheese', categoryCode: 'GOCH712', postingDate: '2021-01-01 10:23:12' },
      { id: 26, category: 'Greek Yogurt', categoryCode: 'GRYU581', postingDate: '2021-01-01 10:23:12' },
      { id: 27, category: 'Chocolate Milk', categoryCode: 'CHMK337', postingDate: '2021-01-01 10:23:12' },
      { id: 28, category: 'Mozzarella Cheese', categoryCode: 'MOCH963', postingDate: '2021-01-01 10:23:12' },
      { id: 29, category: 'Feta Cheese', categoryCode: 'FECH461', postingDate: '2021-01-01 10:23:12' },
      { id: 30, category: 'Provolone Cheese', categoryCode: 'PRCH592', postingDate: '2021-01-01 10:23:12' },
      { id: 31, category: 'Gouda Cheese', categoryCode: 'GOCH893', postingDate: '2021-01-01 10:23:12' },
      { id: 32, category: 'Brie Cheese', categoryCode: 'BRCH117', postingDate: '2021-01-01 10:23:12' },
      { id: 33, category: 'Cheddar Cheese', categoryCode: 'CHCH628', postingDate: '2021-01-01 10:23:12' },
      { id: 34, category: 'Swiss Cheese', categoryCode: 'SWCH339', postingDate: '2021-01-01 10:23:12' },
      { id: 35, category: 'Blue Cheese', categoryCode: 'BLCH745', postingDate: '2021-01-01 10:23:12' },
      { id: 36, category: 'Ricotta Cheese', categoryCode: 'RICC235', postingDate: '2021-01-01 10:23:12' },
      { id: 37, category: 'Parmesan Cheese', categoryCode: 'PACH826', postingDate: '2021-01-01 10:23:12' },
      { id: 38, category: 'Colby Jack Cheese', categoryCode: 'COJH531', postingDate: '2021-01-01 10:23:12' },
      { id: 39, category: 'Monterey Jack Cheese', categoryCode: 'MOJH998', postingDate: '2021-01-01 10:23:12' },
      { id: 40, category: 'Pepper Jack Cheese', categoryCode: 'PEJH172', postingDate: '2021-01-01 10:23:12' },
      { id: 41, category: 'Creamer', categoryCode: 'CRER821', postingDate: '2021-01-01 10:23:12' },
      { id: 42, category: 'Half-and-Half', categoryCode: 'HAHL467', postingDate: '2021-01-01 10:23:12' },
      { id: 43, category: 'Whipped Topping', categoryCode: 'WHTG745', postingDate: '2021-01-01 10:23:12' },
      { id: 44, category: 'Frozen Yogurt', categoryCode: 'FRYU912', postingDate: '2021-01-01 10:23:12' },
      { id: 45, category: 'Sherbet', categoryCode: 'SHER375', postingDate: '2021-01-01 10:23:12' },
      { id: 46, category: 'Mascarpone Cheese', categoryCode: 'MACH664', postingDate: '2021-01-01 10:23:12' },
      { id: 47, category: 'Neufchâtel Cheese', categoryCode: 'NECH579', postingDate: '2021-01-01 10:23:12' },
      { id: 48, category: 'Quark Cheese', categoryCode: 'QUCH376', postingDate: '2021-01-01 10:23:12' },
      { id: 49, category: 'Buttermilk', categoryCode: 'BUMK238', postingDate: '2021-01-01 10:23:12' },
      { id: 50, category: 'Eggnog', categoryCode: 'EGNO682', postingDate: '2021-01-01 10:23:12' },
    ];

    // Set the totalItems variable
    this.totalItems = this.data.length;
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

  searchCategory(){

  }

  onRowEnter(index: number) {
  this.selectedRowIndex = index;
  }

  onRowLeave() {
    this.selectedRowIndex = -1;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalCategory = 0;
  totalCompany  = 0;
  totalProduct = 0;
  totalSales = 0;
  weeksales = 0;
  yesturdaySales = 0;
  todaySales = 0;
  constructor() { }

  ngOnInit(): void {
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ManagecategoryComponent } from './managecategory/managecategory.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { ManagecompanyComponent } from './managecompany/managecompany.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ManageproductComponent } from './manageproduct/manageproduct.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { SalesComponent } from './sales/sales.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { BetweendatesComponent } from './betweendates/betweendates.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addcategory', component: AddcategoryComponent },
  { path: 'managecategory', component: ManagecategoryComponent },
  { path: 'addcompany', component: AddcompanyComponent },
  { path: 'managecompany', component: ManagecompanyComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'manageproduct', component: ManageproductComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'searchproduct', component: SearchproductComponent },
  { path: 'betweendates', component: BetweendatesComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'profile', component: ProfileComponent },

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

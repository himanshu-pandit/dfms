import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //user is login
  isActive = true;

  isExpanded = false;
  isShowing = false;
  showCategory: boolean = false;
  showCompany: boolean = false;
  showProduct: boolean = false;
  showReport: boolean = false;
  loginName:string="Admin";
  //showSubSubMenu: boolean = false;

  constructor(private router: Router){
    
  }

  mouseenter() {
    if (!this.isExpanded) {
      console.log(this.isExpanded)
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  navigateTo(redirect:any) {
    this.router.navigate([redirect]); 
  }

  logout(){
    console.log("logout success.");
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isExpanded = false;
  isShowing = false;
  showCategory: boolean = false;
  showCompany: boolean = false;
  showProduct: boolean = false;
  showReport: boolean = false;
  loginName:string="Admin";
  //showSubSubMenu: boolean = false;

  constructor(private router: Router){
    this.isLoginPage();
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

  isLoginPage(){
    // this.isLoggedIn = authService.isLoggedIn();
    return this.router.url === '/login';
  }

  navigateTo(redirect:any) {
    this.router.navigate([redirect]); 
  }

  logout(){
    console.log("logout success.");
    this.router.navigate(['/login']); 
  }
}

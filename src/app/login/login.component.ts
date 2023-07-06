import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  slideNo=0;
  imageList=['assets/flowers.jpg','assets/flowers.jpg','assets/flowers.jpg'];
  slideImg=this.imageList[0];

  usernameFormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._@]*$')]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._@]*$')]);

  matcher = new MyErrorStateMatcher();

  showPassword = false;

  showSpinner:boolean = false;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  spinnerSize = 36;


  constructor(private router: Router) {

   }

  ngOnInit() {
    this.startAutomaticSlide();
  }

  //slide next img
  nextSlide(next:number){
    if(this.slideNo == 0){
      this.slideNo = 2;
      this.slideImg = this.imageList[this.slideNo];
    }else{
      this.slideImg = this.imageList[this.slideNo+next];
      this.slideNo = this.slideNo+next;
    }
  }
  
  //slide previous img
  previousSlide(previous:number){
    if(this.slideNo  == 2){
      this.slideNo = 0;
      this.slideImg = this.imageList[this.slideNo];
    }else{
      this.slideImg = this.imageList[this.slideNo+previous];
      this.slideNo = this.slideNo+previous;
    }
  }

  //slide particular img
  currentSlide(current:number){
    this.slideNo = current;
    this.slideImg = this.imageList[this.slideNo];
  }

  //automatic slide
  startAutomaticSlide(){
    setInterval(() => {
      this.nextSlide(-1);
    }, 10000);
  }

  //password visibility
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }


  //loign action
  login(){
    this.showSpinner = true;
    console.log("login success.");
    // navigate to dashboard after login
    this.router.navigate(['/dashboard']);
  }

}

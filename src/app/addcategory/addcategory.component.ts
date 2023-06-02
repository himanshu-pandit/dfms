import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent {

  categoryFormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]);
  categoryCodeFormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]);
  
  matcher = new MyErrorStateMatcher();
}

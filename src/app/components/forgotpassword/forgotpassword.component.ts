import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  forgetForm!: FormGroup;
  submitted = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.forgetForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email,Validators.pattern("^[a-c]{3}[.+-_]{0,1}[x-z]{3}@[a-z]{2}[.+-]{0,1}[a-z]{2}[.+-]{0,1}[a-z]{2}$")]],
    });
  }
  onforgotSubmit() {
    if (this.forgetForm.valid) {
      console.log(this.forgetForm.value);
    }
    else
      console.log("invalid form")
    }
}
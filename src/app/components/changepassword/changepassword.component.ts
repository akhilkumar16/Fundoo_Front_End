import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  resetForm!: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      Password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onchangeSubmit() {
    if (this.resetForm.valid) {
      console.log(this.resetForm.value);
    }
    else
      console.log("form is not valid fill form correctly")
    }
}


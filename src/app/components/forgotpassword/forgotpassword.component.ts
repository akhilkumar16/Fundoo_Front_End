import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservices/user.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  forgetForm!: FormGroup;
  submitted = true;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.forgetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  onforgotSubmit() {
    this.submitted = true;
    if (this.forgetForm.invalid) {
      return
    }

    console.log(this.forgetForm.value);debugger
    this.userService.forgetuser(this.forgetForm.value).subscribe((response: any) => {
      console.log(" forgot password", response);
    })
  }
}
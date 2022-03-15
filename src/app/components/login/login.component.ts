import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder , private userService: UserService) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onloginSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return
    }

    console.log(this.loginForm.value);
    this.userService.loginuser(this.loginForm.value).subscribe((response: any) => {
      console.log("login successfull", response);
    })
  }
}
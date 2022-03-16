import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  token :any 
  resetForm!: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder,private userService: UserService,private activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      Password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.activatedroute.snapshot.paramMap.get('token')
  }
  onchangeSubmit() {
    this.submitted = true;
    if (this.resetForm.invalid) {
      return
    }

    console.log(this.resetForm.value);
    this.userService.resetuser(this.resetForm.value,this.token).subscribe((response: any) => {
      console.log("change successfull", response);
    })
  }
}

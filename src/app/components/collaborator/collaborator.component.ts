import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CollabService } from 'src/app/services/collab/collab.service';
import { UserService } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  collabEmail: any // to search for emails
  alluserlist: any // to verify user in list of user in db
  allcolaboratorlist: any // only for note collab user
  admin: any
  submited=false;
  fromofcolab! : FormGroup;
  noteId:any;
  constructor(private formBuilder: FormBuilder,private collaboratorservice: CollabService, @Inject(MAT_DIALOG_DATA) public data: any, private userservice: UserService) { }

  ngOnInit(): void {
    console.log(this.data);// injected data from notecard in displaynotes
    this.totaldata(this.data.userId);
    this.getlistofcolab();
    this.noteId=this.data.noteId;
    console.log(this.noteId);
    
    this.fromofcolab = this.formBuilder.group({
      email:['',[Validators.required,Validators.email,Validators.pattern]]
    })
  }
  totaldata(qwerty: any) {
    this.userservice.getusers().subscribe((response: any) => {
      this.alluserlist = response;
      this.admin = response.filter((key: any) => {
        return key.userId === qwerty
      })
    })
  }
  getlistofcolab(){
    this.collaboratorservice.getlistofcolab(this.data.noteId).subscribe((response:any)=>{
      this.allcolaboratorlist = response;
      console.log(this.allcolaboratorlist);
    })
  }
  colabcreate(){
    this.submited=true;
    console.log(this.fromofcolab.value);
    this.collaboratorservice.create(this.fromofcolab.value.email,this.noteId).subscribe((response:any)=>{
      console.log(response);
      
    })
  }
}

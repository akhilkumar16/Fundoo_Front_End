import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CollabService } from 'src/app/services/collab/collab.service';
import { UserService } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  constructor(private collaboratorservice:CollabService, @Inject(MAT_DIALOG_DATA) public data:any,private userservice:UserService) { }

  ngOnInit(): void {
    console.log(this.data);// injected data from notecard in displaynotes
    this.totaldata();
  }
  totaldata(){
    this.userservice.getusers().subscribe((response:any)=>{
      console.log(response);
      
    })
  }

}

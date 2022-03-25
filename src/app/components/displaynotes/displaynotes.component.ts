import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { NoteservicesService } from 'src/app/services/Noteservices/noteservices.service';
import { DataService } from 'src/app/services/data/data.service';
@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  @Input() NotesArray:any
  title: any;
  discription: any;
  constructor(public dialog : MatDialog,private dataservice:DataService,private note:NoteservicesService) { }
  ngOnInit(): void {
    this.dataservice.recvData.subscribe((response:any)=>{
      console.log(response);
    })
  }
openDialog(note:any): void{
  let dialogRef=this.dialog.open(UpdateComponent,{data:note});
  dialogRef.afterClosed().subscribe(result =>{
    this.title=result;
      this.discription=result;
    console.log(result);
  })
}
responsefromnote(e:any){
  console.log(e);
}
Pin(note:any){
  this.note.Pinned(note).subscribe((response:any)=>{
    console.log(response);
    
  })
}
}

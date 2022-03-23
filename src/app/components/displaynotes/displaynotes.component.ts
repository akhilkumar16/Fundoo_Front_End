import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  @Input() NotesArray:any
  title: any;
  discription: any;
  constructor(public dialog : MatDialog) { }
  ngOnInit(): void {
  }
openDialog(note:any): void{
  let dialogRef=this.dialog.open(UpdateComponent,{data:note});
  dialogRef.afterClosed().subscribe(result =>{
    this.title=result;
      this.discription=result;
    console.log(result);
  })
}
}

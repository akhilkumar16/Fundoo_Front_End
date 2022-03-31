import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { NoteservicesService } from 'src/app/services/Noteservices/noteservices.service';
import { DataService } from 'src/app/services/data/data.service';
import { outputAst } from '@angular/compiler';
@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  @Input() NotesArray:any
  @Output() changeColorOfNote = new EventEmitter<any>();
  @Output() updateNoteToRefresh = new EventEmitter<any>();
  @Output() trashNoteToRefresh = new EventEmitter<any>();
  @Output() archiveNoteToRefresh= new EventEmitter<any>();

  searchfilter:any
  title: any;
  discription: any;
  constructor(public dialog : MatDialog,private dataservice:DataService,private note:NoteservicesService) { }
  colourdata = [
    { colorcode: '#fff', name: 'white' },
    { colorcode: '#f28b82', name: 'red' },
    { colorcode: '#fbbc04', name: 'orange' },
    { colorcode: '#FFFF00', name: 'yellow' },
    { colorcode: '#ccff90', name: 'green' },
    { colorcode: '#a7ffeb', name: 'teal' },
    { colorcode: '#cbf0f8', name: 'Blue' },
    { colorcode: '#aecbfa', name: 'darkblue' },
    { colorcode: '#d7aefb', name: 'purple' },
    { colorcode: '#fdcfe8', name: 'pink' },
    { colorcode: '#e6c9a8', name: 'brown' },
    { colorcode: '#e8eaed', name: 'grey' },
  ]
  ngOnInit(): void {
    this.dataservice.recvData.subscribe((response:any)=>{
      console.log(response);
      this.searchfilter = response
    })
  }
openDialog(note:any): void{
  let dialogRef=this.dialog.open(UpdateComponent,{data:note});
  dialogRef.afterClosed().subscribe(result =>{
    this.title=result;
      this.discription=result;
    this.updateNoteToRefresh.emit('')
  })
}
responsefromnote(e:any){
  console.log(e);
}
message(e:any){  
  console.log(e);
  this.changeColorOfNote.emit(" ")
}
trash(data:any){  
  console.log(data);  
  this.trashNoteToRefresh.emit(" ")
}
archive(data:any){  
  console.log(data);  
  this.archiveNoteToRefresh.emit(" ")
}
Pin(note:any){
  this.note.Pinned(note).subscribe((response:any)=>{
    console.log(response);
  })
}
}

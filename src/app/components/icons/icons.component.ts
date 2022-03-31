import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { NoteservicesService } from 'src/app/services/Noteservices/noteservices.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CollaboratorComponent } from '../collaborator/collaborator.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() notedata: any; // notedata is coming from display
  @Input() colourdata:any;// colourdata coming from display
  @Output() trashNoteToRefresh= new EventEmitter<any>();
  @Output() archiveNoteToRefresh= new EventEmitter<any>(); 
  @Output() changecolour = new EventEmitter<any>();
  showIcons: boolean = true
  constructor(public noteservice: NoteservicesService,private dataservice:DataService,private router:Router,public dialog: MatDialog) { }
  

  ngOnInit(): void {
  }
  Archive() {
    console.log(this.notedata);

    this.noteservice.archive(this.notedata).subscribe((response: any) => {
      console.log(response);
      this.archiveNoteToRefresh.emit(Response)
    })
  }
  Delete() {
    console.log(this.notedata);

    this.noteservice.delete(this.notedata).subscribe((response: any) => {
      console.log(response);
      this.trashNoteToRefresh.emit(Response)
    })
  }
  Deletetotal() {
    console.log(this.notedata);

    this.noteservice.deletetotal(this.notedata).subscribe((response: any) => {
      console.log(response)
    })
  }
  select(color: any) {
    this.notedata.color = color
    console.log(this.notedata.color);
    this.noteservice.changeofcolor(this.notedata).subscribe((response: any) => {
      console.log(response);
      this.changecolour.emit(color)
    })
  }
  collab(notedata:any) {
    notedata = this.notedata
    let dialogRef = this.dialog.open(CollaboratorComponent, { data: notedata });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
}
}

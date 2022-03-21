import { Component, Input, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/services/Noteservices/noteservices.service';
@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  token:any
  NoteList: any;
  constructor(private noteservices: NoteservicesService) { }

  ngOnInit(): void {
    this.NoteList = [{ title: ' ', discription: '' }]
    this.getallnotes()
  }
  getallnotes() {
    this.noteservices.getnotes().subscribe((response: any) => {
      console.log(response)
    }
    )
  }
}
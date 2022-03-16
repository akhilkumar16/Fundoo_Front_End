import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
NoteList:any
  constructor() { }

  ngOnInit(): void {
    this.NoteList = [{ title: ' ', description:''}]
  }

}

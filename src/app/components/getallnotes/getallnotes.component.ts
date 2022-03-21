import { Component, Input,OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/services/Noteservices/noteservices.service';
@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
NoteList:any
  constructor(private noteservices :NoteservicesService) { }

  ngOnInit(): void {
    this.NoteList = [{ title: ' ', discription:''}]
  }
getallnotes(){
  this.noteservices.getallnotes().subscribe((response:any) => 
  console.log(response))
}
}

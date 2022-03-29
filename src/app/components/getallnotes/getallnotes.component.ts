import { Component, Input, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/services/Noteservices/noteservices.service';
@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  AllNoteList: any
  constructor(private noteservices: NoteservicesService) { }

  ngOnInit(): void {

    this.getallnotes()
  }
  getallnotes() {
    this.noteservices.getnotes().subscribe((response: any) => {
      console.log(response.data)
      var filterlist = response.data.filter((obj: any) => {
        return obj.delete == false && obj.archive == false
      })
      console.log(filterlist);

      this.AllNoteList = filterlist;
    })
  }
  colourchanged(e:any){
    console.log(e);
    this.getallnotes();
  }
  update(e:any){
    console.log(e);
    this.getallnotes();
  }
  trash(data:any)
  {
     console.log("refreshed",data);
     this.getallnotes();
  }
  archive(data:any)
  {
     console.log("refreshed",data);
     this.getallnotes();
  }

}
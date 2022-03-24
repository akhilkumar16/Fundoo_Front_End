import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/services/Noteservices/noteservices.service';

@Component({
  selector: 'app-deletenotes',
  templateUrl: './deletenotes.component.html',
  styleUrls: ['./deletenotes.component.scss']
})
export class DeletenotesComponent implements OnInit {
  DeletedNoteList : any 
  constructor(private noteservices: NoteservicesService) { }

  ngOnInit(): void {
    this.getallnotes();
  }
  getallnotes() {
    this.noteservices.getnotes().subscribe((response: any) => {
      console.log(response.data)
      var filterlist = response.data.filter((obj: any) => {
        return obj.delete == true;
      })
      console.log(filterlist);

      this.DeletedNoteList = filterlist;
    })
  }
}

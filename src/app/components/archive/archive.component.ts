import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/services/Noteservices/noteservices.service';
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  ArchivedNoteList: any
  constructor(private noteservices: NoteservicesService) { }

  ngOnInit(): void {
    this.getallnotes();
  }
  getallnotes() {
    this.noteservices.getnotes().subscribe((response: any) => {
      console.log(response.data)
      var filterlist = response.data.filter((obj: any) => {
        return obj.archive == true
      })
      console.log(filterlist);

      this.ArchivedNoteList = filterlist;
    })
  }
}

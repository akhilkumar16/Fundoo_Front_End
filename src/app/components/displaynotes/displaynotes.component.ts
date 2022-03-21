import { Component, Input, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/services/Noteservices/noteservices.service';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  @Input() NotesArray:any // decorate the property with @Input()
  constructor(private noteService:NoteservicesService) { }
  ngOnInit(): void {
  }

}

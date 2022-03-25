import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { NoteservicesService } from 'src/app/services/Noteservices/noteservices.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() notedata: any; // notedata is coming from dispaly 
  @Output() changecolour = new EventEmitter<any>();
  showIcons: boolean = true
  constructor(public noteservice: NoteservicesService, private dataservice: DataService) { }
  given = [
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
  }
  Archive() {
    console.log(this.notedata);

    this.noteservice.archive(this.notedata).subscribe((response: any) => {
      console.log(response)
    })
  }
  Delete() {
    console.log(this.notedata);

    this.noteservice.delete(this.notedata).subscribe((response: any) => {
      console.log(response)
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
}
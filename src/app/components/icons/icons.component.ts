import { Component, Input, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/services/Noteservices/noteservices.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() notedata: any; // notedata is coming from dispaly 
  constructor(public noteservice: NoteservicesService) { }

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
}

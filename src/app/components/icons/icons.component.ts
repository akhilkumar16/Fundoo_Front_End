import { Component, Input, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/services/Noteservices/noteservices.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
@Input() note:any;
  constructor(public noteservice:NoteservicesService) { }

  ngOnInit(): void {
  }
Delete(note:any){
  this.noteservice.delete(note).subscribe((response:any)=>{
    console.log(response)
  })
}
}

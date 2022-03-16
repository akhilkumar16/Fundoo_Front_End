import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
isshow=false;
  constructor() { }

  ngOnInit(): void {
  }
  Show(){
    this.isshow=true;
  }

}

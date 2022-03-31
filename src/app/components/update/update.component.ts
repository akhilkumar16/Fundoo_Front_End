import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteservicesService } from 'src/app/services/Noteservices/noteservices.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  // NoteId: any;
  title: any;
  discription: any;
  colour:any;
  constructor(private noteservice: NoteservicesService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any) {
      // console.log(data);
      this.title=data.title;
      this.discription=data.discription;
      this.colour=data.color
  }
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
  ngOnInit(): void {

  }
  Updatenotes() {

    if (this.title != this.data.title || this.discription != this.data.discription) {
      this.data.title = this.title;
      this.data.discription = this.discription;
      this.noteservice.updatenotes(this.data).subscribe((response: any) => {
        console.log(response)
      })
    }
    this.dialogRef.close()
  }
  Pin() {
    console.log(this.data);

    this.noteservice.Pinned(this.data).subscribe((response: any) => {
      console.log(response)
    })
  }
  setmatchcolour(a :any , b:any){ // a is complete colour list and b is this.color
    return this.colour.filter((obj:any)=>{
      return obj.colourdata.name.toLocaleLowerCase().includes(b)
    })
  }
}

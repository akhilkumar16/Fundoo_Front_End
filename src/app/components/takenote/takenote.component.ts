import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteservicesService } from 'src/app/services/Noteservices/noteservices.service';
@Component({
  selector: 'app-note',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  createForm!: FormGroup;
  writenote: boolean = false;
  constructor(private formBuilder: FormBuilder, private noteservice: NoteservicesService) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: ['', Validators.required],
      discription: ['', Validators.required]

    });
  }

  takeanote() {
    console.log(this.writenote);
    return this.writenote === true ? (this.writenote = false) : (this.writenote = true); 
  }
  onSubmit() {
    this.writenote = false;

    if (this.createForm.valid) {
      console.log(this.createForm.value)

      let payload = {
        title: this.createForm.value.title,
        discription: this.createForm.value.discription
      }
      this.noteservice.takenote(payload).subscribe((response: any) => { //subcribe is used for take values from serives and also for connects to observables.
        console.log(response);
      })
      window.location.reload();
    } else {
      console.log("enter data");
    }
  }
}
import { Component,Inject, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { FormBuilder ,FormGroup,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LabelService } from 'src/app/services/label/label.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  selected: boolean = true
  edit: boolean = false
  deleteicon: boolean = true
  LabelList: any
  newlabelName: any
  labelName: any
  LabelId:any
  name: any
  labelform!: FormGroup
  updatelabelform!: FormGroup

  constructor(private dialogRef: MatDialogRef<LabelComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
   private labelservice: LabelService,private formbuilder:FormBuilder) {
    this.labelform = this.formbuilder.group({
      labelName:['',Validators.required]
    })
    console.log(data);
    this.updatelabelform = this.formbuilder.group({
      editlabelName:['',Validators.required]
    })
  }

  ngOnInit(): void {
    
  }
hovered() {
    this.deleteicon = false
  }
  nothovered() {
    this.deleteicon = true
  }

  select() {
    this.selected = true
  }
  close() {
    this.selected = false
  }

  editing() {
    this.edit = true
  }
  doneedit(obj:any) {
    this.edit = false
    console.log(obj.labelName,this.updatelabelform.value.editlabelName);
    if(obj.labelName!=this.updatelabelform.value.editlabelName){
      this.updatelabel(obj.labelName,this.updatelabelform.value.editlabelName);
    }
  }

  create() {
    if (this.labelform.invalid) {
      return;
    }
    this.labelservice.createlabel(this.labelform.value.labelName).subscribe((response: any) => {
      console.log(response);
    })
  }

  updatelabel(data: any, newdata: any) {
   this.labelservice.updatelabel(data,newdata).subscribe((response:any)=>{
     console.log(response);
   })
  }

  deletelabel(data: any) {
    this.LabelId=data.labelId
    this.labelservice.deletelabel(this.LabelId).subscribe((response: any) => {
      console.log(response);
    })
  }
}

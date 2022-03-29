import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  token: any;

  constructor(private httpservice: HttpService) {
    this.token = localStorage.getItem("token")
  }
  getlabels() {
    let headerobject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.getService('Label/AllLabels', true,headerobject)
  }
  createlabel(data:any){
    let headerobject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    var url = 'Label/Create?labelname='+data
    return this.httpservice.postService(url,null,true,headerobject)
  }

  updatelabel(storedlabel:any,newlabel:any){
    let headerobject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    var url = 'Label/updatelabel?LabelId='+storedlabel+'&LabelName='+newlabel;
    return this.httpservice.putService(url,null,true,headerobject)
  }

  deletelabel(data:any){
    let headerobject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log(data);
    
    var url = 'Label/Deletelabel?LabelId='+ data;
    return this.httpservice.deleteService(url,headerobject)
  }
}
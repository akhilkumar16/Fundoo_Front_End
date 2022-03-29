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
  getheaders() {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return header;
  }
  getlabels() {
    return this.httpservice.getService('Label/AllLabels', true, this.getheaders())
  }
  createlabel(data:any){
    var url = 'Label/Create?labelname='+data
    return this.httpservice.postService(url,null,true,this.getheaders())
  }

  updatelabel(olddata:any,newdata:any){
    var url = 'Label/updatelabel?LabelId=5&LabelName='+olddata.labelName+'&newLabelName='+newdata.labelName;
    return this.httpservice.putService(url,null,true,this.getheaders())
  }

  deletelabel(data:any){
    var url = 'Label/Deletelabel?LabelId'+data;
    return this.httpservice.deleteService(url,this.getheaders())
  }
}
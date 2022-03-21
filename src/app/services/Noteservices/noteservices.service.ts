import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteservicesService {
  token: any

  constructor(private httpservice: HttpService) { }
  takenote(data: any) {
    this.token = localStorage.getItem("token")
    let headerobject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log("take note called", data);
    return this.httpservice.postService('Notes/Create', data, true, headerobject);
  }
  getallnotes() {
    this.token = localStorage.getItem("token")
    let headerobject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization ': 'Bearer' + this.token
      })
    }
    console.log("get note called");
    return this.httpservice.getService('Notes/GetAll', true, headerobject);
  }
}
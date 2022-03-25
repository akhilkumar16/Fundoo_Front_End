import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpservices/http.service';
import { concat } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteservicesService {
  token: any

  constructor(private httpservice: HttpService) {
    this.token = localStorage.getItem("token")
  }

  takenote(data: any) {
    // this.token = localStorage.getItem("token")
    let headerobject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log("take note called", data);
    return this.httpservice.postService('Notes/Create', data, true, headerobject);
  }
  getnotes() {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.getService('Notes/Show', true, header)
  }
  updatenotes(data: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log(data);
    return this.httpservice.putService('Notes/Update', data, true, header)
  }
  Pinned(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log(data.noteId);
    var pinurl = 'Notes/Pin?noteid=' + data.noteId
    return this.httpservice.putService(pinurl, null, true, header)
  }
  archive(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log(data.noteId);
    var archiveurl = 'Notes/Archive?noteid=' + data.noteId
    return this.httpservice.putService(archiveurl, null, true, header)
  }
  delete(data: any) {
    console.log(data.noteId);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log(data.noteId);
    var url = 'Notes/Delete?noteid=' + data.noteId
    return this.httpservice.putService(url, null, true, header)
  }
  deletetotal(data: any) {
    console.log(data.noteId);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log(data.noteId);
    var url = 'Notes/ForeverDelete?noteid=' + data.noteId
    return this.httpservice.deleteService(url,header)
  }
  changeofcolor(data:any) {
    console.log(data.noteId);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log(data.noteId);
    var url = 'Notes/AddColor?color=' +data.color+'&noteid='+ data.noteId
    return this.httpservice.putService(url,null,true,header)
  }

}

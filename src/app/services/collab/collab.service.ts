import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpservices/http.service';
@Injectable({
  providedIn: 'root'
})
export class CollabService {
  token: any
  noteid:any
  collabEmail:any

  constructor(private httpservice:HttpService) {
    this.token = localStorage.getItem('token')
    this.getusers();
   }
   getheader(){
    let headerObj = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return headerObj;
  }
  getusers(){
    let object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.httpservice.getService('User/redis', false, object)
  }

  create(notedata:any,email:any){
    let data = {
      noteid:notedata.noteId,
      collabEmail:email
    }
    return this.httpservice.postService('Collaborator/Create', data, true, this.getheader())
  }
}

import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpService:HttpService) { 
  }
  registeruser(data:any){
    let headersObject={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log("Signup called",data)
    return this.httpService.postService('/User/Register',data,false,headersObject)
  }
} 

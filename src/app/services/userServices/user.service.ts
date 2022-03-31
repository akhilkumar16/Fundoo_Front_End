import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpService: HttpService) {
  }
  registeruser(data: any) {
    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log("Signup called", data)
    return this.httpService.postService('User/Register', data, false, headersObject)
  }
  loginuser(data: any) {
    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log("Login called", data)
    return this.httpService.postService('User/Login', data, false, headersObject)
  }
  forgetuser(data: any) {
    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log("forgotPassword called", data.email)
    return this.httpService.postService('User/ForgotPassword?Email=' + data.email, {}, false, headersObject)
  }
  resetuser(data: any,token:any) {
    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer'+token
      })
    }
    console.log("reset called", data)
    return this.httpService.postService('User/ResetPassword', data,true, headersObject)
  }
  getusers(){
    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.httpService.getService('User/redis',false, headersObject)
  }
} 

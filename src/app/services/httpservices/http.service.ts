import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl=environment.BaseUrl
  constructor(private http:HttpClient) { }

  postService(url: any, reqdata: any, token: boolean= false, httpOptions: any){

    console.log(reqdata,token)

    return this.http.post(this.BaseUrl+url,reqdata,token && httpOptions)

  }
  getService(url: string, token: boolean = false, httpAuthOptions: any = {}) {
    console.log("Get service called");

  }
  putService(){

  }
  deleteService(){

  }
}
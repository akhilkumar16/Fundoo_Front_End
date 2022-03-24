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
  getService(url: string, token: boolean = false, httpOptions: any = {}) {
    console.log("Get service called");
    return this.http.get(this.BaseUrl + url,token && httpOptions);
  }
  putService(url: string, reqdata: any, token: boolean= true, httpOptions: any ={}){

    console.log("put service")

    return this.http.put(this.BaseUrl+url,reqdata,token && httpOptions)
  }
  deleteService(url: any, httpOptions: any ={}){
    console.log("deleted totally")

    return this.http.delete(this.BaseUrl+url, httpOptions)
  }
}
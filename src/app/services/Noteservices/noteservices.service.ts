import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteservicesService {
  token: any

  constructor(private httpservice: HttpService) {    this.token = localStorage.getItem("token")
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
  getnotes() 
  {
    let header= {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer ' + this.token
      })
    }
   return this.httpservice.getService('Notes/Show', true,header )
   }
   updatenotes(data:any){

    let header= {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer ' + this.token
      })
    }
    console.log(data);
    return this.httpservice.putService('Notes/Update',data,true,header)
   }
   delete(data:any) 
   {
     let header= {
       headers: new HttpHeaders({ 
         'Content-Type':'application/json',
         'Authorization':'Bearer ' + this.token
       })
     }
     console.log(data.NoteId);
     
    return this.httpservice.putService('Notes/Delete',data.NoteId,true,header)
    }
  
}
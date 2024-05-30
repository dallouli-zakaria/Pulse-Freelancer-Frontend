import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }


  public count(){
  const client= this.http.get("http://localhost:8000/api/clientCount");
  return client;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }


  public count(){
  const client= this.http.get("http://localhost:8000/api/clientCount");
  return client;
  }

  public index(){
    const Client=this.http.get<Client>('http://localhost:8000/api/clients')
    return Client
  }
  public update(){
    
  }
}

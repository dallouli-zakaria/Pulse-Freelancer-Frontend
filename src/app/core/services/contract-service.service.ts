import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContractServiceService {

  constructor(private http:HttpClient) { }
contract:any;

  public count(){
  this.contract=  this.http.get("http://localhost:8000/api/contractCount");
return this.contract;
  }
}

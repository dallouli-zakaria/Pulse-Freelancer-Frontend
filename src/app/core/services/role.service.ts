import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../models/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }
role:any
  public index(){
    this.role=this.http.get<Role>("http://localhost:8000/api/role")
  }
}

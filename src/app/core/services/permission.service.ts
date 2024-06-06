import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Permission } from './../models/Permission';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
permission:any;
  constructor(private http:HttpClient) { }
  public index(){
  this.permission=this.http.get<Permission>('http://localhost:8000/api/permission')
  return this.permission
  }
}

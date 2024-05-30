import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {

  constructor(private http:HttpClient) { }

  public count(){
    const freelancer=this.http.get('http://localhost:8000/api/freelancerCount');
    return freelancer;
  }
}

import { Component, OnInit } from '@angular/core';
import { FreelancerService } from '../../../../core/services/freelancer.service';
import { Freelancer } from '../../../../core/models/freelancer';


@Component({
  selector: 'app-table-freelancer',
  templateUrl: './table-freelancer.component.html',
  styleUrl: './table-freelancer.component.scss'
})
export class TableFreelancerComponent {

dataSource:any=[];
freelancerData:any=[];
  constructor(private freelancers:FreelancerService){
  }
ngOnInit(): void {
this.index();
}

public index(){

    this.freelancerData= this.freelancers.index().subscribe({
     next:(data:Freelancer)=>{
      this.dataSource=data
      console.log(data); 
      },
     error:(erroe)=>{
      console.log(erroe);  
      }
    });
  return this.freelancerData
}
  
  displayedColumns: string[] = ['id','name','email','title', 'city', 'TJM', 'availability', 'phone','action'];
 
}

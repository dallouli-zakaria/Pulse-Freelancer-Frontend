import { Component, OnInit } from '@angular/core';
import { FreelancerService } from '../../../../core/services/freelancer.service';
import { Freelancer } from '../../../../core/models/freelancer';


@Component({
  selector: 'app-table-freelancer',
  templateUrl: './table-freelancer.component.html',
  styleUrl: './table-freelancer.component.scss'
})
export class TableFreelancerComponent {

dataSource:any;
dataSourc:any
  constructor(private freelancers:FreelancerService){
  }
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.


   this.dataSourc= this.freelancers.index().subscribe({
    next:(data:Freelancer)=>{
      this.dataSource=data
      console.log(data);
      
    }
   });
}

  
  displayedColumns: string[] = ['id','name','email','title', 'city', 'TJM', 'availability', 'phone','action'];
 
}

import { Component } from '@angular/core';
import { ClientService } from '../../../../core/services/client.service';
import { ContractServiceService } from '../../../../core/services/contract-service.service';
import { FreelancerService } from '../../../../core/services/freelancer.service';

@Component({
  selector: 'app-chart-dash',
  templateUrl: './chart-dash.component.html',
  styleUrl: './chart-dash.component.scss'
})
export class ChartDashComponent {
  client!:any
  contarct!:any
  freelancer!:number
  constructor(private clint:ClientService,private contracts:ContractServiceService
    ,private freelancers:FreelancerService
  ){
 
  }
  ngOnInit(): void {
    //client observable
    this.clint.count().subscribe((data)=>{this.client=data; });
    //contarct obeservable
    this.contracts.count().subscribe((data:any)=>{this.contarct = data} );
    //freeacer observable
    this.freelancers.count().subscribe((data:any)=>{this.freelancer=data});

  }




columnChartOptions = {
    animationEnabled: true,
    title: {
      text: 'Angular Column Chart in Material UI Tabs',
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: 'column',
        dataPoints: [
          { label: 'client', y: this.client},
          { label: 'contract', y: this.contarct },
          { label: 'freelancer', y: this.freelancer },
        
        ],
      },
    ],
  };
}

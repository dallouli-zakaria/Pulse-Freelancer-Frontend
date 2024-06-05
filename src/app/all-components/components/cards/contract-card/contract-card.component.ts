import { Component } from '@angular/core';
import { FreelancerService } from '../../../../core/services/freelancer.service';
import { ContractServiceService } from '../../../../core/services/contract-service.service';

@Component({
  selector: 'app-contract-card',
  templateUrl: './contract-card.component.html',
  styleUrl: './contract-card.component.scss'
})
export class ContractCardComponent {
contract!:any
  constructor(private contracts:ContractServiceService){
  }

  ngOnInit(): void {
   this.contracts.count().subscribe({
    
    next: (data:any)=>{this.contract=data},

    error:(error:any)=>{console.log(error);

   }});
  }
}

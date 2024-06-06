import { Component } from '@angular/core';
import { ContractServiceService } from '../../../../core/services/contract-service.service';

@Component({
  selector: 'app-table-contract',
  templateUrl: './table-contract.component.html',
  styleUrl: './table-contract.component.scss'
})
export class TableContractComponent {
  dataSource:any=[];
  
constructor(private contracts:ContractServiceService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.contracts.index().subscribe({
      next:(data:any)=>{
        this.dataSource=data
     
      },
      error:(erroe:any)=>{
        console.log(erroe);
        
      }
    }) 
  }

  displayedColumns: string[] = ['id', 'title',
  'period',
  'budget',
  'project_description',
'Action'];

}

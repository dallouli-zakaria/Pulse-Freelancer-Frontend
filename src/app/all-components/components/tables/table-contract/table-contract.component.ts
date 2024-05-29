import { Component } from '@angular/core';

@Component({
  selector: 'app-table-contract',
  templateUrl: './table-contract.component.html',
  styleUrl: './table-contract.component.scss'
})
export class TableContractComponent {
  data:any = [
   
  ];
  displayedColumns: string[] = ['id', 'name','email', 'role', 'update','delete'];
  dataSource = this.data;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-table-client',
  templateUrl: './table-client.component.html',
  styleUrl: './table-client.component.scss'
})
export class TableClientComponent {
  data:any = [
   
  ];
  displayedColumns: string[] = ['id', 'name','email', 'role', 'update','delete'];
  dataSource = this.data;
}

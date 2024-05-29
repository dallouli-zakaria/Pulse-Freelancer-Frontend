import { Component } from '@angular/core';

@Component({
  selector: 'app-table-meets',
  templateUrl: './table-meets.component.html',
  styleUrl: './table-meets.component.scss'
})
export class TableMeetsComponent {
  data:any = [
   
  ];
  displayedColumns: string[] = ['id', 'name','email', 'role', 'update','delete'];
  dataSource = this.data;
}

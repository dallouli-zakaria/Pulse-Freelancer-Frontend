import { Component } from '@angular/core';

@Component({
  selector: 'app-table-admin',
  templateUrl: './table-admin.component.html',
  styleUrl: './table-admin.component.scss'
})
export class TableAdminComponent {
data:any = [
   
  ];
  displayedColumns: string[] = ['id', 'name','email', 'role', 'update','delete'];
  dataSource = this.data;
}

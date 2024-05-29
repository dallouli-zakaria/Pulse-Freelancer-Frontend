import { Component } from '@angular/core';

@Component({
  selector: 'app-table-role',
  templateUrl: './table-role.component.html',
  styleUrl: './table-role.component.scss'
})
export class TableRoleComponent {
  data:any = [
   
  ];
  displayedColumns: string[] = ['id', 'name','email', 'role', 'update','delete'];
  dataSource = this.data;
}

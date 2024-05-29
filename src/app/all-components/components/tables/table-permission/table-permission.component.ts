import { Component } from '@angular/core';

@Component({
  selector: 'app-table-permission',
  templateUrl: './table-permission.component.html',
  styleUrl: './table-permission.component.scss'
})
export class TablePermissionComponent {
  data:any = [
   
  ];
  displayedColumns: string[] = ['id', 'name','email', 'role', 'update','delete'];
  dataSource = this.data;
}

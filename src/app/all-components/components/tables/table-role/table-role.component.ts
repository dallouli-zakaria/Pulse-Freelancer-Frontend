import { Component } from '@angular/core';

@Component({
  selector: 'app-table-role',
  templateUrl: './table-role.component.html',
  styleUrl: './table-role.component.scss'
})
export class TableRoleComponent {
  constructor(){}
  dataSource:any;
  roleData:any

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  
  }

  displayedColumns: string[] = ['id', 'name','email'];
  
}

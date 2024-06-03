import { Component } from '@angular/core';

@Component({
  selector: 'app-table-freelancer',
  templateUrl: './table-freelancer.component.html',
  styleUrl: './table-freelancer.component.scss'
})
export class TableFreelancerComponent {
  data:any = [
    'id',
    'name',
    'email'
   
  ];
  displayedColumns: string[] = ['id', 'name','email', 'role', 'update','delete'];
  dataSource = this.data;
}

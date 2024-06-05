import { Component, OnInit } from '@angular/core';
import { Client } from '../../../../core/models/Client';
import { id } from '@swimlane/ngx-charts';
import { HttpClient } from '@angular/common/http';
import { ClientService } from '../../../../core/services/client.service';

@Component({
  selector: 'app-table-client',
  templateUrl: './table-client.component.html',
  styleUrl: './table-client.component.scss'
})
export class TableClientComponent {

  constructor(private clientS:ClientService){

  }
  dataSourci:any;
  dataSource:any

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.dataSourci = this.clientS.index().subscribe({
    next:(data:Client)=>{
      this.dataSource=data;
      console.log(data);
      

    }
   });
   
  }
  // dat: any = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'profession','action'];
  
}

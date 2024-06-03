import { Component } from '@angular/core';
import { ClientService } from '../../../../core/services/client.service';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrl: './client-card.component.scss'
})
export class ClientCardComponent {
client!:any

 constructor(private clint:ClientService){

 }
  ngOnInit(): void {
  this.clint.count().subscribe({next:(data)=>{
   this.client=data},
   error:(error:any)=>{
   console.log(error);}
   },);
   }
  
 
  }



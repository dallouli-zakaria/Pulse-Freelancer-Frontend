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
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  this.clint.count().subscribe((data)=>{
this.client=data;
 }
  
 )
  }

}

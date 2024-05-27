import { Dialog } from '@angular/cdk/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit{
  @Input() totalpages:number=0;
  ngOnInit(): void {
   
  }
  panelOpenState = false;
 
  constructor(public dialogs:Dialog, public auth:AuthenticationService){}
 menu() :void{
  this.dialogs.open(SidenavComponent)}

}


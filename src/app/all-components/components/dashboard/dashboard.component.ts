import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { SidenavComponent } from '../../../layout/sidenav/sidenav.component';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(public dialog:Dialog , public authen:AuthenticationService){}
  menu() :void{
    this.dialog.open(SidenavComponent)}
}

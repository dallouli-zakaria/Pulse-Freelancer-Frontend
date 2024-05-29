import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { DashboardComponent } from './all-components/components/dashboard/dashboard.component';
import { DashboardscomComponent } from './all-components/components/dashboardscom/dashboardscom.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from './all-components/components/material/material';
import { ChartComponent } from '@swimlane/ngx-charts';
import { AdminComponent } from './all-components/components/admin/admin/admin.component';
import { ClientCardComponent } from './all-components/components/cards/client-card/client-card.component';
import { FreelancerCardComponent } from './all-components/components/cards/freelancer-card/freelancer-card.component';
import { ContractCardComponent } from './all-components/components/cards/contract-card/contract-card.component';
import { FreelancerComponent } from './all-components/components/freelancer/freelancer/freelancer.component';
import { ContractComponent } from './all-components/components/contracts/contract/contract.component';
import { ChartDashComponent } from './all-components/components/charts/chart-dash/chart-dash.component';
import { TableAdminComponent } from './all-components/components/tables/table-admin/table-admin.component';
import { TableFreelancerComponent } from './all-components/components/tables/table-freelancer/table-freelancer.component';
import { TableContractComponent } from './all-components/components/tables/table-contract/table-contract.component';
import { TableMeetsComponent } from './all-components/components/tables/table-meets/table-meets.component';
import { MeetComponent } from './all-components/components/meet/meet.component';
import { ClientComponent } from './all-components/components/clients/client/client.component';
import { TableClientComponent } from './all-components/components/tables/table-client/table-client.component';
import { LoginComponent } from './all-components/components/auth/login/login.component';
import { SignUpComponent } from './all-components/components/auth/sign-up/sign-up.component';
import { RoleComponent } from './all-components/components/accessibility/roles/role/role.component';
import { PermissionComponent } from './all-components/components/accessibility/permissions/permission/permission.component';
import { TableRoleComponent } from './all-components/components/tables/table-role/table-role.component';
import { TablePermissionComponent } from './all-components/components/tables/table-permission/table-permission.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopbarComponent,
    DashboardComponent,
    DashboardscomComponent,
    AdminComponent,
    ClientCardComponent,
    FreelancerCardComponent,
    ContractCardComponent,
    FreelancerComponent,
    ContractComponent,
    ChartDashComponent,
    TableAdminComponent,
    TableFreelancerComponent,
    TableContractComponent,
    TableMeetsComponent,
    MeetComponent,
    ClientComponent,
    TableClientComponent,
    LoginComponent,
    SignUpComponent,
    RoleComponent,
    PermissionComponent,
    TableRoleComponent,
    TablePermissionComponent,
   
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatDialogModule,
    FormsModule,
  
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

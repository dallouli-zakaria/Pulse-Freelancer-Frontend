import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardscomComponent } from './all-components/components/dashboardscom/dashboardscom.component';
import { AdminComponent } from './all-components/components/admin/admin/admin.component';
import { ClientComponent } from './all-components/components/clients/client/client.component';
import { FreelancerComponent } from './all-components/components/freelancer/freelancer/freelancer.component';
import { ContractComponent } from './all-components/components/contracts/contract/contract.component';
import { MeetComponent } from './all-components/components/meet/meet.component';
import { LoginComponent } from './all-components/components/auth/login/login.component';
import { SignUpComponent } from './all-components/components/auth/sign-up/sign-up.component';
import { RoleComponent } from './all-components/components/accessibility/roles/role/role.component';
import { PermissionComponent } from './all-components/components/accessibility/permissions/permission/permission.component';

const routes: Routes = [
  {path:'dashboards',component:DashboardscomComponent},
  {path:'admin',component:AdminComponent},
  {path:'client',component:ClientComponent},
  {path:'freelancer',component:FreelancerComponent},
  {path:'contract',component:ContractComponent},
  {path:'meet',component:MeetComponent},
  {path:'login',component:LoginComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'role',component:RoleComponent},
  {path:'permission',component:PermissionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

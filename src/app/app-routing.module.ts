import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardscomComponent } from './all-components/components/dashboardscom/dashboardscom.component';
import { AdminComponent } from './all-components/components/admin/admin/admin.component';

const routes: Routes = [
  {path:'dashboards',component:DashboardscomComponent},
  {path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

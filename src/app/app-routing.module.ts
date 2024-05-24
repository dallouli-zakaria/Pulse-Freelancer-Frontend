import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardscomComponent } from './all-components/components/dashboardscom/dashboardscom.component';

const routes: Routes = [
  {path:'dashboards',component:DashboardscomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

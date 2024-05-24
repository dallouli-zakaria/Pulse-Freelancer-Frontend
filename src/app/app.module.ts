import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { DashboardComponent } from './all-components/components/dashboard/dashboard.component';
import { DashboardscomComponent } from './all-components/components/dashboardscom/dashboardscom.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopbarComponent,
    DashboardComponent,
    DashboardscomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

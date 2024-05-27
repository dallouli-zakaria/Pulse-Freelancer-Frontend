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
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AdminComponent } from './all-components/components/admin/admin/admin.component';
import { ClientCardComponent } from './all-components/components/cards/client-card/client-card.component';
import { FreelancerCardComponent } from './all-components/components/cards/freelancer-card/freelancer-card.component';
import { ContractCardComponent } from './all-components/components/cards/contract-card/contract-card.component';
import { FreelancerComponent } from './all-components/components/freelancer/freelancer/freelancer.component';
import { ContractComponent } from './all-components/components/contracts/contract/contract.component';

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
    ContractComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatDialogModule,
    FormsModule,
    NgxChartsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

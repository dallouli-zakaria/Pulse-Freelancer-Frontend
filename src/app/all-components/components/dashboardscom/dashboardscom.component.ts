import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-dashboardscom',
  templateUrl: './dashboardscom.component.html',
  styleUrl: './dashboardscom.component.scss'
})
export class DashboardscomComponent{
  gridCols:number=3
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.gridCols = 1;
      } else if (result.breakpoints[Breakpoints.Small]) {
        this.gridCols = 2;
      } else if (result.breakpoints[Breakpoints.Medium]) {
        this.gridCols = 3;
      } 
    });
  }
}

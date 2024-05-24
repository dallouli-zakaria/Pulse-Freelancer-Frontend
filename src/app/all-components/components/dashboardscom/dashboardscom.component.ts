import { Component, HostListener, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-dashboardscom',
  templateUrl: './dashboardscom.component.html',
  styleUrl: './dashboardscom.component.scss'
})
export class DashboardscomComponent implements OnInit{
  peProduct!:any[];
productSales!:any[] ;
  productSalesMulti!: any[];
  view:any=[650,350];

  colorScheme = {
domain:['#300cc2','#c76338']
  };
  schemeType:string='ordinal'; //'ordinal' for 'lineader'
  gradient:boolean=true;
  xAxis:boolean=false;
  yAxis:boolean=true;
  legendTitle:string='Products';
  legendTitleMulti:string='Months';
  legendPosition:string='below';
  legend:boolean=false;
  showXAxislabel:boolean=true;
  showYAxislabel:boolean=true;
  yAxislabel:string='Sales';
  xAxislabel:string='Products';
  animations:boolean=true;
  showGridLines:boolean=false;
  barPadding:number=2
  barMargin:number=10
tooltipDisabled:boolean=false;

roundEdges:boolean=true;

 
  constructor(){
    Object.assign(this.productSales, this.productSalesMulti ,this.peProduct

    )
    
  }

ngOnInit():void {
  
}


  // options

@HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Adjust the view size based on window width
    const width = event.target.innerWidth;
    const screenWidth = event.target.innerWidth;
    this.view = [screenWidth * 0.3, 200,
    
    ];
    if (screenWidth <=1175 ){
this.view=[screenWidth * 0.3,200]
    }
   else if ( screenWidth <= 800 && width <= 800  ) {

    this.view=[screenWidth * 0.2,240 ,220]
    }
    else if (screenWidth <= 1109){

    } 
   else {
this.view=[650,360]
   }
 
  }
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 1;
 //NGX-CHARTS ADVANCED

}

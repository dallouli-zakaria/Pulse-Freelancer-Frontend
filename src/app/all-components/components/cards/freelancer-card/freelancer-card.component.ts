import { Component } from '@angular/core';
import { FreelancerService } from '../../../../core/services/freelancer.service';

@Component({
  selector: 'app-freelancer-card',
  templateUrl: './freelancer-card.component.html',
  styleUrl: './freelancer-card.component.scss'
})
export class FreelancerCardComponent {
  freelnacer!:any
  constructor(private freelancers:FreelancerService){
  }

  ngOnInit(): void {
   this.freelancers.count().subscribe((data)=>{this.freelnacer=data});
  }

}

import { Component } from '@angular/core';
import { FreelancerService } from '../../../../core/services/freelancer.service';
import { LoginComponent } from '../../auth/login/login.component';

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
   this.freelancers.count().subscribe({
    next:(data)=>{this.freelnacer=data},
    error:(error:any)=>{console.log(error);
    }} );
  }

}

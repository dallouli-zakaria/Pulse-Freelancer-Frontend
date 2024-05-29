import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFreelancerComponent } from './table-freelancer.component';

describe('TableFreelancerComponent', () => {
  let component: TableFreelancerComponent;
  let fixture: ComponentFixture<TableFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableFreelancerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

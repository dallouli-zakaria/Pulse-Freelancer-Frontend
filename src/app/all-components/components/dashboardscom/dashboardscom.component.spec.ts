import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardscomComponent } from './dashboardscom.component';

describe('DashboardscomComponent', () => {
  let component: DashboardscomComponent;
  let fixture: ComponentFixture<DashboardscomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardscomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardscomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

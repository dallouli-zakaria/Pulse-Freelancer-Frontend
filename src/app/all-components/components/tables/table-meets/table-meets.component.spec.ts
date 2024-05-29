import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMeetsComponent } from './table-meets.component';

describe('TableMeetsComponent', () => {
  let component: TableMeetsComponent;
  let fixture: ComponentFixture<TableMeetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableMeetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableMeetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

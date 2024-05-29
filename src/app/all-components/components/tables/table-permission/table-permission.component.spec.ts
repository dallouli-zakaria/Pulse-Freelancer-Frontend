import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePermissionComponent } from './table-permission.component';

describe('TablePermissionComponent', () => {
  let component: TablePermissionComponent;
  let fixture: ComponentFixture<TablePermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablePermissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

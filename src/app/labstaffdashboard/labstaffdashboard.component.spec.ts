import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabstaffdashboardComponent } from './labstaffdashboard.component';

describe('LabstaffdashboardComponent', () => {
  let component: LabstaffdashboardComponent;
  let fixture: ComponentFixture<LabstaffdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabstaffdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabstaffdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

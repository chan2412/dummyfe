import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabstaffComponent } from './labstaff.component';

describe('LabstaffComponent', () => {
  let component: LabstaffComponent;
  let fixture: ComponentFixture<LabstaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabstaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

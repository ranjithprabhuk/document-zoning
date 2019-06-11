import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalFormComponent } from './medical-form.component';

describe('MedicalFormComponent', () => {
  let component: MedicalFormComponent;
  let fixture: ComponentFixture<MedicalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

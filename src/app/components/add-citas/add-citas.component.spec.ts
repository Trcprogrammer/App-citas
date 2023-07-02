import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCitasComponent } from './add-citas.component';

describe('AddCitasComponent', () => {
  let component: AddCitasComponent;
  let fixture: ComponentFixture<AddCitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCitasComponent]
    });
    fixture = TestBed.createComponent(AddCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

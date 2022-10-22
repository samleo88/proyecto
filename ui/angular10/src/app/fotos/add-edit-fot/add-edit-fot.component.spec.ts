import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFotComponent } from './add-edit-fot.component';

describe('AddEditFotComponent', () => {
  let component: AddEditFotComponent;
  let fixture: ComponentFixture<AddEditFotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

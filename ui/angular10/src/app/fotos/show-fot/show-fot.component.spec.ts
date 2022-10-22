import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFotComponent } from './show-fot.component';

describe('ShowFotComponent', () => {
  let component: ShowFotComponent;
  let fixture: ComponentFixture<ShowFotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

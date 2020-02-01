import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlaces1Component } from './add-places1.component';

describe('AddPlaces1Component', () => {
  let component: AddPlaces1Component;
  let fixture: ComponentFixture<AddPlaces1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlaces1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlaces1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

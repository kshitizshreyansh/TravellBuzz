import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlaces1AddedComponent } from './view-places1-added.component';

describe('ViewPlaces1AddedComponent', () => {
  let component: ViewPlaces1AddedComponent;
  let fixture: ComponentFixture<ViewPlaces1AddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPlaces1AddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlaces1AddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

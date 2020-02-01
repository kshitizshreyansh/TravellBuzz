import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlacesAddedComponent } from './view-places-added.component';

describe('ViewPlacesAddedComponent', () => {
  let component: ViewPlacesAddedComponent;
  let fixture: ComponentFixture<ViewPlacesAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPlacesAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlacesAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

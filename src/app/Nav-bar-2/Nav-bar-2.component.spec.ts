/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavBar-2Component } from './Nav-bar-2.component';

describe('NavBar-2Component', () => {
  let component: NavBar-2Component;
  let fixture: ComponentFixture<NavBar-2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBar-2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBar-2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

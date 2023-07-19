/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookacallComponent } from './bookacall.component';

describe('BookacallComponent', () => {
  let component: BookacallComponent;
  let fixture: ComponentFixture<BookacallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookacallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookacallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

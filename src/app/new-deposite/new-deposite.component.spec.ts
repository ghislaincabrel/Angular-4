import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDepositeComponent } from './new-deposite.component';

describe('NewDepositeComponent', () => {
  let component: NewDepositeComponent;
  let fixture: ComponentFixture<NewDepositeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDepositeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDepositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItermComponent } from './iterm.component';

describe('ItermComponent', () => {
  let component: ItermComponent;
  let fixture: ComponentFixture<ItermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

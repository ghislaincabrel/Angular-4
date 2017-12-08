import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositItermComponent } from './deposit-iterm.component';

describe('DepositItermComponent', () => {
  let component: DepositItermComponent;
  let fixture: ComponentFixture<DepositItermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositItermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositItermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItermsComponent } from './new-iterms.component';

describe('NewItermsComponent', () => {
  let component: NewItermsComponent;
  let fixture: ComponentFixture<NewItermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewItermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

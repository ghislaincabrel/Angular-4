import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositeTemplateComponent } from './deposite-template.component';

describe('DepositeTemplateComponent', () => {
  let component: DepositeTemplateComponent;
  let fixture: ComponentFixture<DepositeTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositeTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

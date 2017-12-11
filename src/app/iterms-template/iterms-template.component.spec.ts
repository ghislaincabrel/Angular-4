import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItermsTemplateComponent } from './iterms-template.component';

describe('ItermsTemplateComponent', () => {
  let component: ItermsTemplateComponent;
  let fixture: ComponentFixture<ItermsTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItermsTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItermsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearningMaterialComponent } from './clearning-material.component';

describe('ClearningMaterialComponent', () => {
  let component: ClearningMaterialComponent;
  let fixture: ComponentFixture<ClearningMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearningMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearningMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

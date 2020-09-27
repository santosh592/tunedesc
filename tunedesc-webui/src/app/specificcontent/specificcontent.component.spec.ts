import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificcontentComponent } from './specificcontent.component';

describe('SpecificcontentComponent', () => {
  let component: SpecificcontentComponent;
  let fixture: ComponentFixture<SpecificcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

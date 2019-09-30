import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumeditorComponent } from './mediumeditor.component';

describe('MediumeditorComponent', () => {
  let component: MediumeditorComponent;
  let fixture: ComponentFixture<MediumeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

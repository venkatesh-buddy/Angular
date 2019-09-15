import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraContainerComponent } from './extra-container.component';

describe('ExtraContainerComponent', () => {
  let component: ExtraContainerComponent;
  let fixture: ComponentFixture<ExtraContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

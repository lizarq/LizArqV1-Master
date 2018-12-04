import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarrouterlinkComponent } from './navbarrouterlink.component';

describe('NavbarrouterlinkComponent', () => {
  let component: NavbarrouterlinkComponent;
  let fixture: ComponentFixture<NavbarrouterlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarrouterlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarrouterlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

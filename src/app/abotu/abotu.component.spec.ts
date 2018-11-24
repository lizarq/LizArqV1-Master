import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbotuComponent } from './abotu.component';

describe('AbotuComponent', () => {
  let component: AbotuComponent;
  let fixture: ComponentFixture<AbotuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbotuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbotuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

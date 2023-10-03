import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikepageComponent } from './bikepage.component';

describe('BikepageComponent', () => {
  let component: BikepageComponent;
  let fixture: ComponentFixture<BikepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BikepageComponent]
    });
    fixture = TestBed.createComponent(BikepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

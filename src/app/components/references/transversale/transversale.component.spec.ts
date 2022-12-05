import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransversaleComponent } from './transversale.component';

describe('TransversaleComponent', () => {
  let component: TransversaleComponent;
  let fixture: ComponentFixture<TransversaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransversaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransversaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

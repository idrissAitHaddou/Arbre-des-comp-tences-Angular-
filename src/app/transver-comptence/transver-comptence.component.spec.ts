import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransverComptenceComponent } from './transver-comptence.component';

describe('TransverComptenceComponent', () => {
  let component: TransverComptenceComponent;
  let fixture: ComponentFixture<TransverComptenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransverComptenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransverComptenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

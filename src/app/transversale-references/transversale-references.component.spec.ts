import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransversaleReferencesComponent } from './transversale-references.component';

describe('TransversaleReferencesComponent', () => {
  let component: TransversaleReferencesComponent;
  let fixture: ComponentFixture<TransversaleReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransversaleReferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransversaleReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

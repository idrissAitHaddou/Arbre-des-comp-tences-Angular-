import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptComptenceComponent } from './concept-comptence.component';

describe('ConceptComptenceComponent', () => {
  let component: ConceptComptenceComponent;
  let fixture: ComponentFixture<ConceptComptenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptComptenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptComptenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

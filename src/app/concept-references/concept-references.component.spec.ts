import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptReferencesComponent } from './concept-references.component';

describe('ConceptReferencesComponent', () => {
  let component: ConceptReferencesComponent;
  let fixture: ComponentFixture<ConceptReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptReferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

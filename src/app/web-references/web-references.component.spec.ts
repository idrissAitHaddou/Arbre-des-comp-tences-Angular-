import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebReferencesComponent } from './web-references.component';

describe('WebReferencesComponent', () => {
  let component: WebReferencesComponent;
  let fixture: ComponentFixture<WebReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebReferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebComptenceComponent } from './web-comptence.component';

describe('WebComptenceComponent', () => {
  let component: WebComptenceComponent;
  let fixture: ComponentFixture<WebComptenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebComptenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebComptenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

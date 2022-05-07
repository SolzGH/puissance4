import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireJoueurComponent } from './formulaire-joueur.component';

describe('FormulaireJoueurComponent', () => {
  let component: FormulaireJoueurComponent;
  let fixture: ComponentFixture<FormulaireJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireJoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

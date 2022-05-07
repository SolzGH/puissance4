import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebutPartieComponent } from './debut-partie.component';

describe('DebutPartieComponent', () => {
  let component: DebutPartieComponent;
  let fixture: ComponentFixture<DebutPartieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebutPartieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebutPartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

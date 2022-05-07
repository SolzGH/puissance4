import { TestBed } from '@angular/core/testing';

import { MatricePuissance4Service } from './matrice-puissance4.service';

describe('MatricePuissance4Service', () => {
  let service: MatricePuissance4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatricePuissance4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

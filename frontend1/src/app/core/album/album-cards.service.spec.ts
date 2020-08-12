import { TestBed } from '@angular/core/testing';

import { AlbumCardsService } from './album-cards.service';

describe('AlbumCardsService', () => {
  let service: AlbumCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

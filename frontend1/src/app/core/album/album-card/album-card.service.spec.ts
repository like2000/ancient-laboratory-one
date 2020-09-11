import {TestBed} from '@angular/core/testing';

import {AlbumCardService} from './album-card.service';

describe('AlbumCardsService', () => {
  let service: AlbumCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HomeFilesService } from './home-files.service';

describe('HomeFilesService', () => {
  let service: HomeFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

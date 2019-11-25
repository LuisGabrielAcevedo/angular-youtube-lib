import { TestBed } from '@angular/core/testing';

import { LgxAngularYoutubeLibService } from './lgx-angular-youtube-lib.service';

describe('LgxAngularYoutubeLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LgxAngularYoutubeLibService = TestBed.get(LgxAngularYoutubeLibService);
    expect(service).toBeTruthy();
  });
});

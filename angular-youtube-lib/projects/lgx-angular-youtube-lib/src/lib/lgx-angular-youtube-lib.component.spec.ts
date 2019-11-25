import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgxAngularYoutubeLibComponent } from './lgx-angular-youtube-lib.component';

describe('LgxAngularYoutubeLibComponent', () => {
  let component: LgxAngularYoutubeLibComponent;
  let fixture: ComponentFixture<LgxAngularYoutubeLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgxAngularYoutubeLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgxAngularYoutubeLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

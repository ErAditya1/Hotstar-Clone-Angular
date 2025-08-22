import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCard } from './video-card';

describe('VideoCard', () => {
  let component: VideoCard;
  let fixture: ComponentFixture<VideoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

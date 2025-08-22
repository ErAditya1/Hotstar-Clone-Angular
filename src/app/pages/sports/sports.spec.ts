import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sports } from './sports';

describe('Sports', () => {
  let component: Sports;
  let fixture: ComponentFixture<Sports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sports]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sports);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

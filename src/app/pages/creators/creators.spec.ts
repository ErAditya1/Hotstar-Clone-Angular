import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Creators } from './creators';

describe('Creators', () => {
  let component: Creators;
  let fixture: ComponentFixture<Creators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Creators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Creators);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

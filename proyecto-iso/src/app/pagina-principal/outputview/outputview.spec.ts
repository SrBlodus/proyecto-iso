import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Outputview } from './outputview';

describe('Outputview', () => {
  let component: Outputview;
  let fixture: ComponentFixture<Outputview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Outputview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Outputview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

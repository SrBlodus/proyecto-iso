import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inputbox } from './inputbox';

describe('Inputbox', () => {
  let component: Inputbox;
  let fixture: ComponentFixture<Inputbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Inputbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inputbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

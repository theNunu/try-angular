import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anything } from './anything';

describe('Anything', () => {
  let component: Anything;
  let fixture: ComponentFixture<Anything>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anything]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anything);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

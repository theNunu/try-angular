import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChampion } from './add-champion';

describe('AddChampion', () => {
  let component: AddChampion;
  let fixture: ComponentFixture<AddChampion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddChampion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChampion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

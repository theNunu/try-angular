import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChampion } from './list-champion';

describe('ListChampion', () => {
  let component: ListChampion;
  let fixture: ComponentFixture<ListChampion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListChampion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListChampion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNameComponent } from './random-name.component';

describe('RandomNameComponent', () => {
  let component: RandomNameComponent;
  let fixture: ComponentFixture<RandomNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

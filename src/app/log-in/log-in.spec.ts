import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayLoginComponent } from './log-in';

describe('LogIn', () => {
  let component: BirthdayLoginComponent;
  let fixture: ComponentFixture<BirthdayLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirthdayLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BirthdayLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

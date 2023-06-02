import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetweendatesComponent } from './betweendates.component';

describe('BetweendatesComponent', () => {
  let component: BetweendatesComponent;
  let fixture: ComponentFixture<BetweendatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetweendatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetweendatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

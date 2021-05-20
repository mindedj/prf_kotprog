import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HibakezeloComponent } from './hibakezelo.component';

describe('HibakezeloComponent', () => {
  let component: HibakezeloComponent;
  let fixture: ComponentFixture<HibakezeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HibakezeloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HibakezeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

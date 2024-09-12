import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedToWorkComponent } from './suggested-to-work.component';

describe('SuggestedToWorkComponent', () => {
  let component: SuggestedToWorkComponent;
  let fixture: ComponentFixture<SuggestedToWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestedToWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestedToWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

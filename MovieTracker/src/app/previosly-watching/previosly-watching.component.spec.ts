import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevioslyWatchingComponent } from './previosly-watching.component';

describe('PrevioslyWatchingComponent', () => {
  let component: PrevioslyWatchingComponent;
  let fixture: ComponentFixture<PrevioslyWatchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrevioslyWatchingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevioslyWatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

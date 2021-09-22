import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemonTeaComponent } from './lemon-tea.component';

describe('LemonTeaComponent', () => {
  let component: LemonTeaComponent;
  let fixture: ComponentFixture<LemonTeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LemonTeaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LemonTeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

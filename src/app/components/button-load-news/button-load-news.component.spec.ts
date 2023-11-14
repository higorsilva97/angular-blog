import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLoadNewsComponent } from './button-load-news.component';

describe('ButtonLoadNewsComponent', () => {
  let component: ButtonLoadNewsComponent;
  let fixture: ComponentFixture<ButtonLoadNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonLoadNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonLoadNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

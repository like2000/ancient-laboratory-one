import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSnackbarComponent } from './home-snackbar.component';

describe('HomeSnackbarComponent', () => {
  let component: HomeSnackbarComponent;
  let fixture: ComponentFixture<HomeSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

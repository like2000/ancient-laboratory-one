import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumFilesComponent } from './album-files.component';

describe('AlbumFilesComponent', () => {
  let component: AlbumFilesComponent;
  let fixture: ComponentFixture<AlbumFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

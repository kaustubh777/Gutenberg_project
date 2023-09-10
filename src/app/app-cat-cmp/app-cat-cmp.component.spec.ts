import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCatCmpComponent } from './app-cat-cmp.component';

describe('AppCatCmpComponent', () => {
  let component: AppCatCmpComponent;
  let fixture: ComponentFixture<AppCatCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCatCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCatCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

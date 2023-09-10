import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookCmpComponent } from './single-book-cmp.component';

describe('SingleBookCmpComponent', () => {
  let component: SingleBookCmpComponent;
  let fixture: ComponentFixture<SingleBookCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBookCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBookCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

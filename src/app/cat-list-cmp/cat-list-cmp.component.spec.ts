import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatListCmpComponent } from './cat-list-cmp.component';

describe('CatListCmpComponent', () => {
  let component: CatListCmpComponent;
  let fixture: ComponentFixture<CatListCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatListCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatListCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDetailCmpComponent } from './cat-detail-cmp.component';

describe('CatDetailCmpComponent', () => {
  let component: CatDetailCmpComponent;
  let fixture: ComponentFixture<CatDetailCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatDetailCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatDetailCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

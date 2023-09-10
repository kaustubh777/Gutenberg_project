import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinknotfoundComponent } from './linknotfound.component';

describe('LinknotfoundComponent', () => {
  let component: LinknotfoundComponent;
  let fixture: ComponentFixture<LinknotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinknotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinknotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

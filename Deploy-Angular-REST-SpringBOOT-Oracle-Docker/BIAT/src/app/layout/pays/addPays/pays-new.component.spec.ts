import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysNewComponent } from './pays-new.component';

describe('PaysNewComponent', () => {
  let component: PaysNewComponent;
  let fixture: ComponentFixture<PaysNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaysNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

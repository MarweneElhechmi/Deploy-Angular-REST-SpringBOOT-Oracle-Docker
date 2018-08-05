import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LstProduitMcComponent } from './lst-produit-mc.component';

describe('LstProduitMcComponent', () => {
  let component: LstProduitMcComponent;
  let fixture: ComponentFixture<LstProduitMcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LstProduitMcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LstProduitMcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

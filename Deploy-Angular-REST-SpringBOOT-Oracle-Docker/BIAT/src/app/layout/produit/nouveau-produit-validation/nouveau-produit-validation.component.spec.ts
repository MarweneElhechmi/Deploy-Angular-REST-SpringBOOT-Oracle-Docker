import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauProduitValidationComponent } from './nouveau-produit-validation.component';

describe('NouveauProduitValidationComponent', () => {
  let component: NouveauProduitValidationComponent;
  let fixture: ComponentFixture<NouveauProduitValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauProduitValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauProduitValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

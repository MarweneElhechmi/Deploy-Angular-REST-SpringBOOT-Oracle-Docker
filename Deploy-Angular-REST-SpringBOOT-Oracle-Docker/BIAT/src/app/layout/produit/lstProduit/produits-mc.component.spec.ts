import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProduitsMcComponent } from './produits-mc.component';


describe('ProduitsMcComponent', () => {
  let component: ProduitsMcComponent;
  let fixture: ComponentFixture<ProduitsMcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitsMcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsMcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

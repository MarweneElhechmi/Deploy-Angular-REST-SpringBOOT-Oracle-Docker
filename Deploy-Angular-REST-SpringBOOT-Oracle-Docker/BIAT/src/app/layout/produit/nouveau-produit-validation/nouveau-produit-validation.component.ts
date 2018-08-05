import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../../../../services/produits.service';

@Component({
  selector: 'app-nouveau-produit-validation',
  templateUrl: './nouveau-produit-validation.component.html',
  styleUrls: ['./nouveau-produit-validation.component.css']
})
export class NouveauProduitValidationComponent implements OnInit {

  constructor(public produitService:ProduitsService) { }

  ngOnInit() {
  }

  onSaveContact(dataForm){
    this.produitService.addProduit(dataForm).
    subscribe(data=>{
      console.log(data);
    },err=>{
      console.log(JSON.parse(err._body).message);
    })
  }

}

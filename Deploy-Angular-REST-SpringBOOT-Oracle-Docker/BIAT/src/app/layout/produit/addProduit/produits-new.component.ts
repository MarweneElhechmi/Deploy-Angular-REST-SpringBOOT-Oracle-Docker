import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { NgIf } from '@angular/common/src/directives';
import { RouterModule,Router,ActivatedRoute } from '@angular/router';
import { Produit } from '../../../../model/model.produit';
import { Pays } from '../../../../model/model.pays';
import { ProduitsService } from '../../../../services/produits.service';
import { PaysService } from '../../../../services/pays.service';
import { routerTransition } from '../../../router.animations';
import { Location } from '@angular/common';


@Component({
  selector: 'app-produits-new',
  templateUrl: './produits-new.component.html',
  styleUrls: ['./produits-new.component.css'],
  animations: [routerTransition()]

})
export class ProduitsNewComponent implements OnInit {

  produit:Produit=new Produit();
  mode:number;
  comboPays:Pays[];
  constructor(  private location: Location, public http:HttpClientModule,
    public produitsService:ProduitsService,public paysService:PaysService,
    public activatedRoute:ActivatedRoute,public router:Router) { }
  reference:number;



  ngOnInit() {
    
    this.paysService.getPays()
    .subscribe(data=>{
      this.comboPays = data;
    },err=>{
      console.log(err);
    })

    this.reference=+this.activatedRoute.snapshot.params['reference'];
  
    if (isNaN(this.reference)) {
   this.mode=1;
   this.router.navigate(['produits-new']);
   
    } else {
      this.mode=3;
      this.produitsService.getProduitByReference(this.reference).
    subscribe(data=>{this.produit=data;
        },
      
        err=>{
      console.log(err);
    })

    }
  }

  onAddProduit(){
    this.router.navigate(['/produits-new']);
    this.mode=1;
    this.location.back();
  }

  ajoutProduit(){
    this.produitsService.addProduit(this.produit).subscribe(data=>{
      console.log(data)
      this.produit=data;
      this.mode=2;
    }
    ,err=>{
      console.log(err);
    })
  }

  modifProduit(){
    this.produitsService.modifierProduit(this.produit)
    .subscribe(data=>{
      console.log(data);
      alert("Mise à Jour effectué avec Succés");
    },err=>{
      console.log(err);
      alert("Probléme de Mise à Jour");
    })
    this.mode=2;
    this.router.navigate(['lst-produit']);
}

}

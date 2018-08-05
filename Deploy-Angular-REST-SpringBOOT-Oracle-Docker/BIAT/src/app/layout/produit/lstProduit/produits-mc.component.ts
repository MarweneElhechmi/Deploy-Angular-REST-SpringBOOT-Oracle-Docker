import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule,Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { ProduitsService } from '../../../../services/produits.service';
import { Produit } from '../../../../model/model.produit';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-produits-mc',
  templateUrl: './produits-mc.component.html',
  styleUrls: ['./produits-mc.component.css'],
  animations: [routerTransition()]

})
export class ProduitsMcComponent implements OnInit {

  pageProduits:any;
  motCle:string="";
  currentPage:number=0;
  pagination:Array<number>;
  produit:Observable<Produit>;
  reference:number=0;

  constructor(public http:HttpClientModule,public produitsService:ProduitsService,public router:Router) { 
    this.produit=this.produitsService.getProduitsWithMc(this.motCle,this.currentPage);

  }

  ngOnInit() {
    this.produit=this.produitsService.getProduitsWithMc(this.motCle,this.currentPage);

  }

  doSearch(){
    this.produitsService.getProduitsParMc(this.motCle,this.currentPage)
    .subscribe(data=>{
      this.pageProduits = data;
      this.pagination=new Array(data.length)
    },err=>{
      console.log(err);
    })
  }

  Chercher(){

    this.doSearch();

  }

  gotoPage(i:number){

    this.currentPage=i;
    this.doSearch();
  }

  onEditProduit(reference:number){
    this.router.navigate(['/produits-new',reference]);
  }

  onDeleteProduit(produit:Produit){
    let confirm=window.confirm("Est-vous sûre de vouloir supprimer ce produit");
    if(confirm==true){
    this.produitsService.supprimerProduit(produit.reference)
    .subscribe(data=>{
      this.pageProduits.content.splice(

        this.pageProduits.content.indexOf(produit),1

      );
      alert("Produit Supprimé")
    },err=>{
      console.log(err);
      alert("Erreur! Produit non supprimé");
    })
  }
    this.router.navigate(['lst-produit']);
  }

  }



import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { PaysService } from '../../../../services/pays.service';
import { Pays } from '../../../../model/model.pays';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lst-produit-mc',
  templateUrl: './lst-produit-mc.component.html',
  styleUrls: ['./lst-produit-mc.component.css'],
  animations: [routerTransition()]

})
export class LstProduitMcComponent implements OnInit {

  page: any;
  pagePays:any;
  motCle:string="";
  currentPage:number=0;
  pagination:Array<number>;
  pays:Pays[];
  valeur:string="";
  loading: boolean;

  displayDialog: boolean;

  selectedPays: Pays;

  newCar: boolean;

  cols: any[];

  reference:number;

  constructor(public http:HttpClientModule,
    public paysService:PaysService,public router:Router,public activatedRoute:ActivatedRoute) {}

  mode:number;

  ngOnInit() {
  }

doSearch_Ref(){
    this.reference=+this.activatedRoute.snapshot.params['reference'];

       //Liste des Pays
       this.paysService.getPaysByRef(this.reference)
       .subscribe(data=>{
         this.pagePays=data;
         console.log(this.pagePays)
       },err=>{
         console.log(err);
       })
}

  doSearch(){
    this.paysService.getPaysParMc(this.motCle,this.currentPage)
    .subscribe(data=>{
      this.router.navigate(["/lst-pays"]);

      this.pagePays = data;
      this.page=data;
      this.pays=[this.page];
      console.log(data);
      console.log(this.pagePays)
      console.log(this.pays.length);
      //this.pagination=new Array(this.pays.length);

      this.pagination=new Array(data['totalPages']);
      console.log(this.pagination);
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
    this.router.navigate(['/editProduit',reference]);
  }

  EditProduit(reference:number){

    this.router.navigate(['/produitsNew',reference]);

  }

  onDeletePays(pays:Pays){
    let confirm=window.confirm("Est-vous sûre de vouloir supprimer ce produit");
    if(confirm==true){
    this.paysService.supprimerPays(pays.codePays)
    .subscribe(data=>{
      this.pagePays.content.splice(

        this.pagePays.content.indexOf(pays),1

      );
      alert("Pays Supprimé")
    },err=>{
      console.log(err);
      alert("Erreur! Pays non supprimé");
    })
  }
    this.router.navigate(['produitsParMc']);
  }

  }

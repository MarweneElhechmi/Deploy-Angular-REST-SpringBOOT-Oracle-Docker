import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { ProduitsService } from '../../../../services/produits.service';

@Component({
  selector: 'app-p',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  currentPage:number=0;
  pageProduits:any;
  pagination:Array<number>;

  constructor(public http:Http,public produitsService:ProduitsService) { }

  ngOnInit() {
    this.produitsService.getProduits()
    .subscribe(data=>{
      this.pageProduits = data;
    },err=>{
      console.log(err);
    })
  }

  gotoPage(i:number){

    this.currentPage=i;
    this.ngOnInit();
  }

}

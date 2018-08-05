import { Component, OnInit } from '@angular/core';
import { Pays } from '../../../../model/model.pays';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { routerTransition } from '../../../router.animations';
import { PaysService } from '../../../../services/pays.service';

@Component({
  selector: 'app-pays-new',
  templateUrl: './pays-new.component.html',
  styleUrls: ['./pays-new.component.css'],
  animations: [routerTransition()]
})
export class PaysNewComponent implements OnInit {
  pays:Pays = new Pays();
  Paays:any;
  mode:number=1;
  constructor(public http: HttpClientModule, public paysService:PaysService) { }

  ngOnInit() {
    console.log(this.pays);
  }

  ajoutPays(){
    this.paysService.addPays(this.pays).subscribe(data=>{
      console.log(data)
      this.pays=data;
      this.mode=2;
    }
    ,err=>{
      console.log(err);
    })
  }

}

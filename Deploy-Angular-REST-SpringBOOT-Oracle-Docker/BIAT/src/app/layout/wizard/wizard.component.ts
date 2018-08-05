import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy  } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaysService } from '../../../services/pays.service';
import { Pays } from '../../../model/model.pays';
import { ExampleHeader } from './example-header';
import { MatDialog } from '@angular/material';
import { WizardPopup } from './wizard-popup';
import { ProduitsService } from '../../../services/produits.service';
import { Produit } from '../../../model/model.produit';


@Component({
    selector: 'app-wizard-page',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.scss'],
    animations: [routerTransition()],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardComponent implements OnInit  {
  /** @title Datepicker with custom calendar header */
  exampleHeader = ExampleHeader;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  pays:Pays = new Pays();
   paysPopup:Pays;
  Paays:any;
  mode:number=1;
  produit:Produit=new Produit();

  constructor(private _formBuilder: FormBuilder,public http: HttpClientModule,
    public paysService:PaysService,public produitsService:ProduitsService,public dialog: MatDialog) { }

        ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      secondCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
      fourthCtrl:['', Validators.required],
      fifthCtrl:['', Validators.required],
      sixCtrl:['', Validators.required]

    });


  }

  ajoutPays(){

    this.paysService.addPays(this.pays).subscribe(data=>{
      console.log(this.firstFormGroup.value);
      console.log("*************");
      console.log(data);
      console.log("*************");
      console.log(this.pays);
      this.pays=data;
    }
    ,err=>{
      console.log(err);
    })
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


  openDialog() : void {

    let dialogRef = this.dialog.open(WizardPopup, {
        width: '700px',
      data: {
        paysPop:this.paysPopup
      }
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.paysPopup = result;
        console.log(result);
      });

  }

}

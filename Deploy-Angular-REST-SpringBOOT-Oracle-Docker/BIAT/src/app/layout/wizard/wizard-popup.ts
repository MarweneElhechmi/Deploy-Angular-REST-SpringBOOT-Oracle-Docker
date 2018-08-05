import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { PaysService } from "../../../services/pays.service";
import { Pays } from "../../../model/model.pays";



@Component({
    selector: 'wizard-popup',
    templateUrl: 'wizard-popup.html',
})
  export class WizardPopup implements OnInit{

    paysModal:Pays[];
    private modals: any[] = [];

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,public paysService:PaysService) {}

    ngOnInit(): void {
        this.paysService.getPays().subscribe(data=>{
            this.paysModal=data;
            console.log(this.paysModal);
          }
          ,err=>{
            console.log(err);
          })
    }

  }


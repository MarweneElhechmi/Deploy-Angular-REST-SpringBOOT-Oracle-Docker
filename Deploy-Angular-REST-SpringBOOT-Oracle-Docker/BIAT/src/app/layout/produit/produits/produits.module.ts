import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PageHeaderModule } from '../../../shared/index';
import { ProduitsMcRoutingModule } from '../lstProduit/produits-mc-routing.module';
import { ProduitsMcComponent } from '../lstProduit/produits-mc.component';
import { ProduitsRoutingModule } from './produits-routing.module';
import { ProduitsComponent } from './produits.component';



@NgModule({
    imports: [CommonModule, ProduitsRoutingModule, PageHeaderModule, FormsModule],
    declarations: [ProduitsComponent]
})
export class ProduitsModule {}

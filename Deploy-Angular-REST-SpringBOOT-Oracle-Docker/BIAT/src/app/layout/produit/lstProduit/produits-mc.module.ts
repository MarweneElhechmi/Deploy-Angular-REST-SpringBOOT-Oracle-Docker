import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProduitsMcComponent } from './produits-mc.component';
import { ProduitsMcRoutingModule } from './produits-mc-routing.module';
import { PageHeaderModule } from '../../../shared/index';



@NgModule({
    imports: [CommonModule, ProduitsMcRoutingModule, PageHeaderModule, FormsModule],
    declarations: [ProduitsMcComponent]
})
export class ProduitsMcModule {}

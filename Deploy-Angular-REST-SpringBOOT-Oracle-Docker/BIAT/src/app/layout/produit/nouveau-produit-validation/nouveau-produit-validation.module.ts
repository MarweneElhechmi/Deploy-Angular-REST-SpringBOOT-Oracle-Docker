import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../../shared/index';
import { NouveauProduitValidationComponent } from './nouveau-produit-validation.component';
import { NouveauProduitValidationRoutingModule } from './nouveau-produit-validation-routing.module';




@NgModule({
    imports: [CommonModule, NouveauProduitValidationRoutingModule, PageHeaderModule, FormsModule],
    declarations: [NouveauProduitValidationComponent]
})
export class NouveauProduitValidationModule {}

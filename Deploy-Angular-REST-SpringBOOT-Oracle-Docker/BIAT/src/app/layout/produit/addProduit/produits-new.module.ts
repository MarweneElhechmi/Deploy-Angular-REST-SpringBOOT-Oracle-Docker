import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../../shared/index';
import { ProduitsNewRoutingModule } from './produits-new-routing.module';
import { ProduitsNewComponent } from './produits-new.component';




@NgModule({
    imports: [CommonModule, ProduitsNewRoutingModule, PageHeaderModule, FormsModule],
    declarations: [ProduitsNewComponent]
})
export class ProduitsNewModule {}

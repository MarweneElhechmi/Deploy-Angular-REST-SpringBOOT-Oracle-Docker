import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaysNewComponent } from './pays-new.component';
import { PaysNewRoutingModule } from './pays-new-routing.module';
import { PageHeaderModule } from '../../../shared/index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, PaysNewRoutingModule, PageHeaderModule, FormsModule],
    declarations: [PaysNewComponent]
})
export class PaysNewModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../../../shared/index';
import { LstProduitMcRoutingModule } from './lst-produit-mc-routing.module';
import { LstProduitMcComponent } from './lst-produit-mc.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
    imports: [CommonModule, LstProduitMcRoutingModule, PageHeaderModule, FormsModule,TableModule,
        NgxPaginationModule],
    declarations: [LstProduitMcComponent]
})
export class LstProduitMcModule {}

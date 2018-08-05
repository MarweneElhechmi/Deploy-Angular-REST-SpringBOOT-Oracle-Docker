import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { MatTabsModule, MatCardContent, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule,ButtonModule } from 'primeng/primeng'


@NgModule({
    imports: [CommonModule, BlankPageRoutingModule,MatTabsModule,MatCardModule,FormsModule,TableModule,
        DialogModule,ButtonModule ],
    declarations: [BlankPageComponent]
})
export class BlankPageModule {}

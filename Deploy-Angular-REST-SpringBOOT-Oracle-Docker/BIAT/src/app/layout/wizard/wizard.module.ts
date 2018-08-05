import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatStepperModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatIconModule, MatDialogModule } from '@angular/material';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { WizardComponent } from './wizard.component';
import { WizardRoutingModule } from './wizard-routing.module';
import { ExampleHeader } from './example-header';
import { WizardPopup } from './wizard-popup';


@NgModule({
    imports: [CommonModule, WizardRoutingModule,MatTabsModule,MatCardModule,FormsModule,
        MatFormFieldModule,MatInputModule,MatStepperModule,ReactiveFormsModule,MatButtonModule,
    MatDatepickerModule,MatNativeDateModule,MatIconModule,MatDialogModule ],
    declarations: [WizardComponent,ExampleHeader,WizardPopup],
    entryComponents:[ExampleHeader,WizardPopup],
    exports : [ReactiveFormsModule]
})
export class WizardModule {}

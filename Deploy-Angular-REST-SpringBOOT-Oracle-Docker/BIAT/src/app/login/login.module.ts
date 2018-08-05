import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule }   from '@angular/forms';
import { MatCardModule, MatFormFieldModule,
     MatTabsModule, MatInputModule } from '@angular/material';


@NgModule({
    imports: [CommonModule, LoginRoutingModule, FormsModule,
        MatIconModule,MatCardModule,MatFormFieldModule,MatTabsModule,MatInputModule
],
    declarations: [LoginComponent]
})
export class LoginModule {}


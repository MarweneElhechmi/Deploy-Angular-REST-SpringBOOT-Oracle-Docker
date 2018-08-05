import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { PaysService } from '../services/pays.service';
import { AuthService } from '../services/auth.service';
import { AccountService } from '../services/account.service';
import { UrlPermission } from './urlPermission/url.permission';
import { ButtonModule } from 'primeng/button';
import { MatCardModule, MatSidenavModule,
    MatToolbarModule } from '@angular/material';
    import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ProduitsService } from '../services/produits.service';

// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        ButtonModule,
        HttpClientModule,
        MatIconModule,
        MatCardModule,
        FormsModule,
        MatSidenavModule,
        MatToolbarModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        HttpClientModule,
        AppRoutingModule
    ],
    exports: [MatIconModule],
    declarations: [AppComponent],
    providers: [AuthGuard,PaysService,ProduitsService,AuthService,AccountService,UrlPermission,AccountService],
    bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsNewComponent } from './produits-new.component';

const routes: Routes = [
    {
        path: '', component: ProduitsNewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProduitsNewRoutingModule {
}


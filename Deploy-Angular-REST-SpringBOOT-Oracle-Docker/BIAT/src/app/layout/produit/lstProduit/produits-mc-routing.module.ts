import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsMcComponent } from './produits-mc.component';

const routes: Routes = [
    {
        path: '', component: ProduitsMcComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProduitsMcRoutingModule {
}


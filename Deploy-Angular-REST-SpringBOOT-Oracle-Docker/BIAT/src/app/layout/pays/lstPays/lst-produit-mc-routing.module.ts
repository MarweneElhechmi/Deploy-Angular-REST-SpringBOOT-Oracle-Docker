import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LstProduitMcComponent } from './lst-produit-mc.component';

const routes: Routes = [
    {
        path: '', component: LstProduitMcComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LstProduitMcRoutingModule {
}

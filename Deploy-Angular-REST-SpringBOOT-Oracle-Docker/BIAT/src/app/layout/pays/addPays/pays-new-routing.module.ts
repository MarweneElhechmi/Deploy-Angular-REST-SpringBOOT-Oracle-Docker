import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaysNewComponent } from './pays-new.component';

const routes: Routes = [
    {
        path: '', component: PaysNewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaysNewRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Fnaf1 } from './fnaf1/fnaf1';
import { Fnaf2 } from './fnaf2/fnaf2';
import { Fnaf3 } from './fnaf3/fnaf3';
import { Fnaf4 } from './fnaf4/fnaf4';
import { NotFoundComponent } from './not-found-component/not-found-component';

export const routes: Routes = [
    {path: 'fnaf1', component: Fnaf1},
    {path: 'fnaf2', component: Fnaf2},
    {path: 'fnaf3', component: Fnaf3},
    {path: 'fnaf4', component: Fnaf4},
    {path: '', redirectTo: '/fnaf1', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AppRoutingModuloe {}
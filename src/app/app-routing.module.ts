import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatDetailCmpComponent } from './cat-detail-cmp/cat-detail-cmp.component';
import { CatListCmpComponent } from './cat-list-cmp/cat-list-cmp.component';
import { LinknotfoundComponent } from './linknotfound/linknotfound.component';


const routes: Routes = [
  { path:'',component: CatListCmpComponent, pathMatch: 'full' },
  { path:'category/:cat',component: CatDetailCmpComponent },
  { path: 'Linknotfound', component: LinknotfoundComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

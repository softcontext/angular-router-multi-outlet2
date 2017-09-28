import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { SecondComponent } from './second/second.component';
import { AComponent } from './second/a/a.component';
import { BComponent } from './second/b/b.component';

import { ThirdComponent } from './third/third.component';
import { CComponent } from './third/c/c.component';
import { DComponent } from './third/d/d.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'second', component: SecondComponent,
    children: [
      { path: 'a', component: AComponent, outlet: 'firstOutlet' },
      { path: 'b', component: BComponent, outlet: 'secondOutlet' }
    ]
  },
  {
    path: 'third', component: ThirdComponent,
    children: [
      { path: 'c', component: CComponent, outlet: 'firstOutlet' },
      { path: ':id', component: DComponent, outlet: 'secondOutlet' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

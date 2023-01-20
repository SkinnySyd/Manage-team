import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './player.component';

const routes: Routes = [
  {
    path: '',
    component: PlayerComponent,
    children: [
      {
        path: '',
       redirectTo: '/player/teams',
       pathMatch: 'full',
     },
      { path: '', loadChildren: () => import('../../pages/player/player.module').then(m => m.PlayerModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }

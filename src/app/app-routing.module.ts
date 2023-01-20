import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo: '/admin/teams', pathMatch: 'full'},
  { path: 'admin', loadChildren: () => import('./modules/layout/admin/admin.module').then(m => m.AdminModule) },
  { path: 'player', loadChildren: () => import('./modules/layout/player/player.module').then(m => m.PlayerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

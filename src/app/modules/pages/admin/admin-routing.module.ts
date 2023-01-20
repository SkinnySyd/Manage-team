import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { PitchesComponent } from './pitches/pitches.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children:[
      { path: 'teams', component:TeamsComponent },
      { path: 'palyers', component:PlayersComponent },
      { path: 'pitches', component:PitchesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

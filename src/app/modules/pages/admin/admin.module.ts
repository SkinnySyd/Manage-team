import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { BookingComponent } from './booking/booking.component';
import { PitchesComponent } from './pitches/pitches.component';


@NgModule({
  declarations: [
    AdminComponent,
    TeamsComponent,
    PlayersComponent,
    BookingComponent,
    PitchesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

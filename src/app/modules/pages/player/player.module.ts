import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './player.component';
import { TeamsComponent } from './teams/teams.component';
import { BookingComponent } from './booking/booking.component';


@NgModule({
  declarations: [
    PlayerComponent,
    TeamsComponent,
    BookingComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule
  ]
})
export class PlayerModule { }

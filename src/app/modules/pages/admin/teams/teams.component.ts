import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/business-logic/services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  constructor(private teamsService : TeamsService) { }



  
  ngOnInit(): void {
    console.log('enter 2');
  }

}

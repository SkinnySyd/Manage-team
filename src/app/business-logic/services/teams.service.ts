import { Injectable } from '@angular/core';
import { ApiHttp } from '../http/api.http';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: ApiHttp) { }

  getTeams(){
      return this.http.get("");
  }
}

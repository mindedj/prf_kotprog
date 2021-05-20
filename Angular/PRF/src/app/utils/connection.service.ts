import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { never } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) { }

  modify(id: number, nev: string, ar: number){
    return this.http.put(environment.node_server + "/termek", {id: id, nev: nev, ar: ar});
  }

  torles(id: number){
    /*return this.http.delete("http://localhost:3000/termek", {id: id});*/
  }

  listTranzakcio(){
    return this.http.get(environment.js_server + "/tranzakcio");
  }

  addTermek(id: number, nev: string, ar: number){
    return this.http.post(environment.node_server + "/termek", {id: id, nev: nev, ar: ar})
  }

  
}

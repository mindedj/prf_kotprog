import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebshopService {

  constructor(private http: HttpClient) { 

  }

  listTermekek(){
    return this.http.get(environment.node_server + '/termek');
  }

  createTranzakcio(osszeg: number){
    return this.http.post(environment.js_server + '/tranzakcio', {osszeg: osszeg, datum: new Date().toLocaleString().replace(",","")})
  }

}

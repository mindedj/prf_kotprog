import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    return this.http.post(environment.node_server + '/login', {username: username, password: password}, {withCredentials: true, responseType: 'text', observe: 'response' as 'response'} );
  }

  logout(){
    return this.http.post(environment.node_server + '/logout', {}, {withCredentials: true, responseType: 'json'});
  }

  register(username: string, password: string){
    return this.http.post(environment.node_server + '/user', {username: username, password: password})
  }


}

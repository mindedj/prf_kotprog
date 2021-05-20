import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../utils/connection.service';
import { LoginService } from '../utils/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  id: number;
  ar: number;
  nev: string;

  constructor(private connectionService: ConnectionService, private loginService: LoginService, private router: Router) { 
    this.id = 0;
    this.ar = 0;
    this.nev = "";
  }

  addTermek(id: number, nev: string, ar: number){
    this.connectionService.addTermek(id, nev, ar).subscribe(stuff => {
      console.log(stuff);
    }, error => {
      console.log(error);
    });
  }

  modify(id: number, nev: string, ar: number){
    this.connectionService.modify(id, nev, ar).subscribe(stuff => {
      console.log(stuff);
    }, error => {
      console.log(error);
    })
  }

  torles(id: number){
    console.log("Torolnie kellene ha mukodne");
  }

  listTranzakciok(){
    this.connectionService.listTranzakcio().subscribe(tranzakcio => {
      console.log(tranzakcio);
    }, error => {
      console.log(error);
    });
  }

  logout(){
    return this.loginService.logout().subscribe(msg => {
      console.log(msg);
      this.router.navigate(['/login'])
    }, error => {
      console.log(error);
      this.router.navigate(['/login'])
    })
  }

  ngOnInit(): void {
  }

}

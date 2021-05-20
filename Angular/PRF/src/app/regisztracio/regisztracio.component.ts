import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../utils/login.service';

@Component({
  selector: 'app-regisztracio',
  templateUrl: './regisztracio.component.html',
  styleUrls: ['./regisztracio.component.css']
})
export class RegisztracioComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private loginService: LoginService) {
    this.username = "";
    this.password = "";
  }

  register(){
    if(this.username !== "" && this.password !== ""){
      this.loginService.register(this.username, this.password).subscribe(stuff => {
        console.log("Sikeres regisztráció", stuff);
      }, error => {
        console.log(error);
      });
    }
  }

  ngOnInit(): void {
  }

}

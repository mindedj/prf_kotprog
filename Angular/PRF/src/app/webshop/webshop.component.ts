import { Component, OnInit } from '@angular/core';
import { WebshopService } from '../utils/webshop.service';

@Component({
  selector: 'app-webshop',
  templateUrl: './webshop.component.html',
  styleUrls: ['./webshop.component.css']
})
export class WebshopComponent implements OnInit {


  termekek: Array<any>;

  constructor(private webshopService: WebshopService) {
    this.termekek = [];  
  }

  createTranzakcio(osszeg: number){
    this.webshopService.createTranzakcio(osszeg).subscribe(stuff => {
      console.log("Sikeres vasarlas", stuff);
    }, error => {
      console.log(error);
    })
  }

  ngOnInit(): void {
      this.webshopService.listTermekek().subscribe((termekek: any) => {
        termekek.map((termek: any) => {
          this.termekek.push([Object.values(termek)[2], Object.values(termek)[3]]);
        });
      }, error => {
        console.log(error);
      })
    }
}

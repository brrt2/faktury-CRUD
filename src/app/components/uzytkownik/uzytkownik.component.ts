import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uzytkownik',
  templateUrl: './uzytkownik.component.html',
  styleUrls: ['./uzytkownik.component.css']
})
export class UzytkownikComponent implements OnInit {

  nazwa:string;
    adres:string;
    miasto:string;
    kodPocztowy:string;
    nip:number;
    login:string;
    haslo:string;
    logo:string;
    numerKonta:number;
    bank:string;

  constructor() { 
    this.nazwa = 'John';
    this.adres = 'Sciegiennego';
  }

  ngOnInit() {
  }

  edytujUzytkownika() {


  }

}

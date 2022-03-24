import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  private contatos: Array<Object> = [];

  constructor(public navCtrl: NavController) {

  
  this.contatos = [
    {
      "nome": "Ricardo",
      "sobrenome": "Crivelli",
      "telefone": "+55 14 99999-9999"
    },
    {
      "nome": "João",
      "sobrenome": "Silva",
      "telefone": "+55 14 55555-5555"
    }
  ]
}
}



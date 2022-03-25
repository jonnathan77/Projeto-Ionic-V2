import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  styleUrls: [ 'contact.scss' ]
})
export class ContactPage {
  private contatos: Array<Object> = [];

  constructor(public navCtrl: NavController) {

  
  this.contatos = [
    {
      "nome": "Jonnathan",
      "sobrenome": "Cruz",
      "telefone": "+55 14 99999-9999",
    },
  ]
}
}



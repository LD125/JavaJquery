import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact.interface';

@Component({
  selector: 'app-ajout-contact',
  templateUrl: './ajout-contact.component.html',
  styleUrls: ['./ajout-contact.component.css']
})
export class AjoutContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  nouveauContact = {};

}

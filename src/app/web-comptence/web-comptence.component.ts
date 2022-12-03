import { Component, OnInit } from '@angular/core';
import { Comptence } from '../comptence.model';
import { Card } from '../home/card.model';

@Component({
  selector: 'app-web-comptence',
  templateUrl: './web-comptence.component.html',
  styleUrls: ['./web-comptence.component.css']
})
export class WebComptenceComponent implements OnInit {
  comptences:Array<Comptence> = new Array<Comptence>();
  constructor() { }

  ngOnInit(): any {
    this.getCards();
  }
  // get all cards
  getCards() {
     this.comptences = [
      {
        id: 1,
        idComptence: 1,
        status : true,
        level : 'L1',
      },
      {
        id: 1,
        idComptence: 1,
        status : true,
        level : 'L2',
      },
      {
        id: 1,
        idComptence: 1,
        status : true,
        level : 'L3',
      },
      {
        id: 1,
        idComptence: 1,
        status : true,
        level : 'L3',
      },
      {
        id: 1,
        idComptence: 1,
        status : true,
        level : 'L3',
      },
      {
        id: 1,
        idComptence: 1,
        status : true,
        level : 'L3',
      },
      {
        id: 1,
        idComptence: 1,
        status : true,
        level : 'L3',
      },
      {
        id: 1,
        idComptence: 1,
        status : true,
        level : 'L3',
      },
    ]
  }

}

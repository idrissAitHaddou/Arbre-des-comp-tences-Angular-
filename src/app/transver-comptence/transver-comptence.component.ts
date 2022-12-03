import { Component, OnInit } from '@angular/core';
import { Comptence } from '../comptence.model';

@Component({
  selector: 'app-transver-comptence',
  templateUrl: './transver-comptence.component.html',
  styleUrls: ['./transver-comptence.component.css']
})
export class TransverComptenceComponent implements OnInit {
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

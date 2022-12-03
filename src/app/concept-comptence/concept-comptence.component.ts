import { Component, OnInit } from '@angular/core';
import { Comptence } from '../comptence.model';

@Component({
  selector: 'app-concept-comptence',
  templateUrl: './concept-comptence.component.html',
  styleUrls: ['./concept-comptence.component.css']
})
export class ConceptComptenceComponent implements OnInit {
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

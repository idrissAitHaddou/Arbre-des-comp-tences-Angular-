import { Component, OnInit } from '@angular/core';
import { Card } from './card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards:Array<Card> = new Array<Card>();;
  constructor() { }

  ngOnInit(): any {
    this.getCards();
  }
  // get all cards
  getCards() {
     this.cards = [
      {
        id: 1,
        firstName : 'idriss',
        lastName : 'ait haddou',
        image : 'idrissaithadou',
        email : '@idrissaithadou',
      },
      {
        id: 1,
        firstName : 'idriss',
        lastName : 'ait haddou',
        image : 'idrissaithadou',
        email : '@aliaithadou',
      },
      {
        id: 1,
        firstName : 'ahmed',
        lastName : 'ait ahmed',
        image : 'idrissaithadou',
        email : '@idrissaithadou',
      },
      {
        id: 1,
        firstName : 'idriss',
        lastName : 'ait haddou',
        image : 'idrissaithadou',
        email : '@idrissaithadou',
      },
      {
        id: 1,
        firstName : 'idriss',
        lastName : 'ait haddou',
        image : 'idrissaithadou',
        email : '@idrissaithadou',
      },
      {
        id: 1,
        firstName : 'idriss',
        lastName : 'ait haddou',
        image : 'idrissaithadou',
        email : '@idrissaithadou',
      },
      {
        id: 1,
        firstName : 'idriss',
        lastName : 'ait haddou',
        image : 'idrissaithadou',
        email : '@idrissaithadou',
      },
      {
        id: 1,
        firstName : 'idriss',
        lastName : 'ait haddou',
        image : 'idrissaithadou',
        email : '@idrissaithadou',
      },
      {
        id: 1,
        firstName : 'idriss',
        lastName : 'ait haddou',
        image : 'idrissaithadou',
        email : '@idrissaithadou',
      },
      {
        id: 1,
        firstName : 'idriss',
        lastName : 'ait haddou',
        image : 'idrissaithadou',
        email : '@idrissaithadou',
      },
      {
        id: 1,
        firstName : 'idriss',
        lastName : 'ait haddou',
        image : 'idrissaithadou',
        email : '@idrissaithadou',
      },
      {
        id: 1,
        firstName : 'idriss',
        lastName : 'ait haddou',
        image : 'idrissaithadou',
        email : '@idrissaithadou',
      },
      {
        id: 1,
        firstName : 'idriss',
        lastName : 'ait haddou',
        image : 'idrissaithadou',
        email : '@idrissaithadou',
      },
      {
        id: 1,
        firstName : 'idriss',
        lastName : 'ait haddou',
        image : 'idrissaithadou',
        email : '@idrissaithadou',
      },
      {
        id: 1,
        firstName : 'idriss',
        lastName : 'ait haddou',
        image : 'idrissaithadou',
        email : '@idrissaithadou',
      },
      {
        id: 1,
        firstName : 'idriss',
        lastName : 'ait haddou',
        image : 'idrissaithadou',
        email : '@idrissaithadou',
      },
      {
        id: 1,
        firstName : 'idriss',
        lastName : 'ait haddou',
        image : 'idrissaithadou',
        email : '@idrissaithadou',
      },
      {
        id: 1,
        firstName : 'idriss',
        lastName : 'ait haddou',
        image : 'idrissaithadou',
        email : '@idrissaithadou',
      },
      {
        id: 1,
        firstName : 'idriss',
        lastName : 'ait haddou',
        image : 'idrissaithadou',
        email : '@idrissaithadou',
      },
      {
        id: 1,
        firstName : 'idriss',
        lastName : 'ait haddou',
        image : 'idrissaithadou',
        email : '@idrissaithadou',
      },
    ]
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/intefraces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards:Array<User> = new Array<User>();
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

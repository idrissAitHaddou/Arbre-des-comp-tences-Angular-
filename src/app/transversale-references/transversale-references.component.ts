import { Component, OnInit } from '@angular/core';
import { Image, Reference } from '../web-references/reference.model';

@Component({
  selector: 'app-transversale-references',
  templateUrl: './transversale-references.component.html',
  styleUrls: ['./transversale-references.component.css']
})
export class TransversaleReferencesComponent implements OnInit {
  images:Array<Image> = new Array<Image>();
  skills:Array<Reference> = new Array<Reference>();
  constructor() { }

  ngOnInit(): any {
    this.getImages();
    this.getSkills();
  }
  getSkills() {
    this.skills = [
      {
        id: 1,
      },
      {
        id: 1,
      },
      {
        id: 1,
      },
      {
        id: 1,
      },
      {
        id: 1,
      },
      {
        id: 1,
      },
      {
        id: 1,
      },
      {
        id: 1,
      },
      {
        id: 1,
      },
    ]
  }
  // get all images
  getImages() {
     this.images = [
      {
        id: 1,
        image : 'image1',
      },
      {
        id: 1,
        image : 'image1',
      },
      {
        id: 1,
        image : 'image1',
      },
      {
        id: 1,
        image : 'image1',
      },
      {
        id: 1,
        image : 'image1',
      },
      {
        id: 1,
        image : 'image1',
      },
      {
        id: 1,
        image : 'image1',
      },
      {
        id: 1,
        image : 'image1',
      },
      {
        id: 1,
        image : 'image1',
      },
      {
        id: 1,
        image : 'image1',
      },
      {
        id: 1,
        image : 'image1',
      },
      {
        id: 1,
        image : 'image1',
      },
      {
        id: 1,
        image : 'image1',
      },
      {
        id: 1,
        image : 'image1',
      },
      {
        id: 1,
        image : 'image1',
      },
      {
        id: 1,
        image : 'image1',
      },
      {
        id: 1,
        image : 'image1',
      },
      {
        id: 1,
        image : 'image1',
      },
      {
        id: 1,
        image : 'image1',
      },
    ]
  }
}

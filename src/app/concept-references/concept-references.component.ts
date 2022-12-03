import { Component, OnInit } from '@angular/core';
import { Image, Reference } from '../web-references/reference.model';

@Component({
  selector: 'app-concept-references',
  templateUrl: './concept-references.component.html',
  styleUrls: ['./concept-references.component.css']
})
export class ConceptReferencesComponent implements OnInit {
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

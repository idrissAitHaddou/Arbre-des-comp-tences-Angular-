import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/intefraces/skill';
import { Image } from 'src/app/intefraces/user';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.css']
})
export class ConceptComponent implements OnInit {
  images:Array<Image> = new Array<Image>();
  skills:Array<Skill> = new Array<Skill>();
  constructor() { }

  ngOnInit(): any {
    // this.getImages();
    // this.getSkills();
  }
  // getSkills() {
  //   this.skills = [
  //     {
  //       id: 1,
  //     },
  //     {
  //       id: 1,
  //     },
  //     {
  //       id: 1,
  //     },
  //     {
  //       id: 1,
  //     },
  //     {
  //       id: 1,
  //     },
  //     {
  //       id: 1,
  //     },
  //     {
  //       id: 1,
  //     },
  //     {
  //       id: 1,
  //     },
  //     {
  //       id: 1,
  //     },
  //   ]
  // }
  // // get all images
  // getImages() {
  //    this.images = [
  //     {
  //       id: 1,
  //       image : 'image1',
  //     },
  //     {
  //       id: 1,
  //       image : 'image1',
  //     },
  //     {
  //       id: 1,
  //       image : 'image1',
  //     },
  //     {
  //       id: 1,
  //       image : 'image1',
  //     },
  //     {
  //       id: 1,
  //       image : 'image1',
  //     },
  //     {
  //       id: 1,
  //       image : 'image1',
  //     },
  //     {
  //       id: 1,
  //       image : 'image1',
  //     },
  //     {
  //       id: 1,
  //       image : 'image1',
  //     },
  //     {
  //       id: 1,
  //       image : 'image1',
  //     },
  //     {
  //       id: 1,
  //       image : 'image1',
  //     },
  //     {
  //       id: 1,
  //       image : 'image1',
  //     },
  //     {
  //       id: 1,
  //       image : 'image1',
  //     },
  //     {
  //       id: 1,
  //       image : 'image1',
  //     },
  //     {
  //       id: 1,
  //       image : 'image1',
  //     },
  //     {
  //       id: 1,
  //       image : 'image1',
  //     },
  //     {
  //       id: 1,
  //       image : 'image1',
  //     },
  //     {
  //       id: 1,
  //       image : 'image1',
  //     },
  //     {
  //       id: 1,
  //       image : 'image1',
  //     },
  //     {
  //       id: 1,
  //       image : 'image1',
  //     },
  //   ]
  // }


}

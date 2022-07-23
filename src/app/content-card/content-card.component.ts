import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css'],
})
export class ContentCardComponent implements OnInit {
  @Input() BikesName?: Content;
  @Input() isLast?: boolean;
  

  constructor() {}

  ngOnInit(): void {
    if (this.BikesName) {
      console.log('Bikes title: ', this.BikesName.title);
    }
  }
  displayAuthorAndId(): void {
    console.log(
      'Author: ',
      this.BikesName?.author,
      ', ID: ',
      this.BikesName?.id
    );
  }
}

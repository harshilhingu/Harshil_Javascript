import { Component, OnInit,Input } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-detailcard',
  templateUrl: './detailcard.component.html',
  styleUrls: ['./detailcard.component.css']
})
export class DetailcardComponent implements OnInit {

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
      'Chess Player Author: ',
      this.BikesName?.author,
      ', Chess Player ID: ',
      this.BikesName?.id
    );
  }

}

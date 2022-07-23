import { Component } from '@angular/core';
import { DEFAULTBIKES } from './data/mock-bikes';
import { Content } from './models/content';
import { BikersService } from './services/bikers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Bike';
  private _individualBiker: Content = DEFAULTBIKES;
  public get individualBiker(): Content {
    return this._individualBiker;
  }
  public set individualBiker(value: Content) {
    this._individualBiker = value;
  }

  constructor(private BikerServices: BikersService) {

  }

  ngOnInit(): void {
    // getContentItem test
    this.BikerServices.getContentItem(1).subscribe(BikeSingleItem => {
      console.log("App component - Got the content item: ", BikeSingleItem);
      this.individualBiker = BikeSingleItem;
    });

  }

  checkForIdInList(idValue: string): void {
    this.BikerServices.getContentItem(Number(idValue)).subscribe(BikeSingleItem => {
      console.log("App component - Got the content item AGAIN: ", BikeSingleItem);
      this.individualBiker = BikeSingleItem;
    });
  }
  }

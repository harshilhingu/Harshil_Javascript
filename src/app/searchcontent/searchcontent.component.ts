import { Component, OnInit } from '@angular/core';
import { DEFAULTBIKES } from '../data/mock-bikes';
import { Content } from '../models/content';
import { BikersService } from '../services/bikers.service';


@Component({
  selector: 'app-searchcontent',
  templateUrl: './searchcontent.component.html',
  styleUrls: ['./searchcontent.component.css']
})
export class SearchcontentComponent implements OnInit {

  title = 'Bike Champions';
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
    this.BikerServices.getContentItem(1).subscribe(BikeChampionsSingleItem => {
      console.log("App component - Got the content item: ", BikeChampionsSingleItem);
      this.individualBiker = BikeChampionsSingleItem;
    });

  }

  checkForIdInList(idValue: string): void {
    this.BikerServices.getContentItem(Number(idValue)).subscribe(BikeChampionsSingleItem => {
      console.log("App component - Got the content item AGAIN: ", BikeChampionsSingleItem);
      this.individualBiker = BikeChampionsSingleItem;


      
    });
  }

}
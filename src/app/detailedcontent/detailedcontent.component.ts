import { Component, OnInit } from '@angular/core';
import { DEFAULTBIKES } from '../data/mock-bikes';
import { Content } from '../models/content';
import { BikersService } from '../services/bikers.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detailedcontent',
  templateUrl: './detailedcontent.component.html',
  styleUrls: ['./detailedcontent.component.css']
})
export class DetailedcontentComponent implements OnInit {

  id:any=''
  title = 'Bike Champions';
  private _individualBiker: Content = DEFAULTBIKES;
  public get individualBiker(): Content {
    return this._individualBiker;
  }
  public set individualBiker(value: Content) {
    this._individualBiker = value;
  }

  constructor(private activatedRoute:ActivatedRoute,private BikerServices: BikersService) {

    this.activatedRoute.paramMap.subscribe(params=>{
      this.id=params.get('id') //+ string to number
})
  }

  ngOnInit(): void {
    this.BikerServices.getContentItem(Number(this.id)).subscribe(BikeChampionsSingleItem => {
      console.log("id: ", this.id);
      console.log("App component - Got the content item: ", BikeChampionsSingleItem);
      this.individualBiker = BikeChampionsSingleItem;
      
    });
  }
  



}

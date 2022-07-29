import { Injectable } from '@angular/core';
import { Bikess } from '../data/mock-bikes';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
  createDb() {
    // setting it to the value of our array of content
    const bike: Content[] = Bikess;
    return {
    bike : bike
    };
  }

  genId(content: Content[]): number {
    return content.length > 0 ?
      Math.max(...content.map(c => c.id || 0)) + 1 : 0;
  }

}

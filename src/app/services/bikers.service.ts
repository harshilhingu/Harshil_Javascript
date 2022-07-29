import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Bikess, DEFAULTBIKES } from '../data/mock-bikes';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root',
})
export class BikersService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };
  constructor(private http: HttpClient) {}

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>("api/bikess");
  }

  getContentItem(id: number): Observable<Content> {
    return this.http.get<Content>("api/bikess/" + id);
  }

  addContentItem(newContentItem: Content): Observable<Content> {
    return this.http.post<Content>("api/bikess", newContentItem, this.httpOptions);
  }

  updateContentItem(newContentItem: Content): Observable<Content[]> {
    return this.http.put<any>("api/bikess", newContentItem, this.httpOptions);
  }

  deleteContentItem(id: number): Observable<any> {
    return this.http.delete("api/bikess/" + id); // need to return something if the content isn't there
  }
}
